const { default: mongoose } = require("mongoose");
const Listing = require("../models/listing.model");
const { ApiError } = require("../utils/ApiError");
const { asyncHandler } = require("../utils/asyncHandler");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const { ObjectId } = require("mongoose").Types;

const createListing = asyncHandler(async (req, res) => {
  const {
    address,
    bathRoom,
    agent,
    propertType,
    bedRoom,
    description,
    discountPrice,
    furnished,
    name,
    offer,
    parking,
    regularPrice,
    type,
  } = req.body;

  if (
    [
      address,
      bathRoom,
      bedRoom,
      propertType,
      description,
      discountPrice,
      furnished,
      name,
      offer,
      parking,
      regularPrice,
      type,
      agent,
    ].some((field) => field === undefined || field == null || field == "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const image = req?.file?.path;
  if (!image) {
    throw new ApiError(400, "Image file is required");
  }

  const imageUrl = await uploadOnCloudinary(image);

  if (!imageUrl) {
    throw new ApiError(400, "Image file is requied2");
  }
  const listing = await Listing.create({
    address,
    bathRoom,
    bedRoom,
    description,
    discountPrice,
    furnished,
    propertType,
    name,
    offer,
    parking,
    regularPrice,
    type,
    agent,
    imageUrl: imageUrl.url,
  });

  res.status(201).json({
    success: true,
    listing,
    messgae: "Listing created successsfully",
  });
});

const getAllListings = asyncHandler(async (req, res) => {
  const { type, city, propertType } = req.query;
  console.log(propertType);
  let { price } = req.query;
  if (!price) {
    price = Number.MAX_SAFE_INTEGER;
  }
  const listing = await Listing.find({
    type: { $regex: type ? type : "", $options: "i" },
    address: { $regex: city ? city : "", $options: "i" },
    propertType: { $regex: propertType ? propertType : "", $options: "i" },
    discountPrice: { $lt: Number(price) },
  });

  if (!listing) {
    throw new ApiError(500, "No more listings");
  }
  res.status(200).json({
    success: true,
    listing,
  });
});

const getSingleListing = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(500, "Id is required");
  }
  // const listing = await Listing.findById(id);
  const listing = await Listing.aggregate([
    {
      $match: {
        _id: new ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "agent",
        foreignField: "_id",
        as: "res",
      },
    },
    {
      $addFields: {
        agentDetails: { $arrayElemAt: ["$res", 0] },
      },
    },
  ]);
  if (!listing) {
    throw new ApiError(404, "No such listing found");
  }
  res.status(200).json({
    success: true,
    listing: listing[0],
  });
});

module.exports = { createListing, getAllListings, getSingleListing };
