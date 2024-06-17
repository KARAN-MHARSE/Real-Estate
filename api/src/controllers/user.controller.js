const { ApiError } = require("../utils/ApiError");
const { asyncHandler } = require("../utils/asyncHandler");
const User = require("../models/user.model");

const generateToken = async (id) => {
  const user = await User.findById(id);
  const refreshToken = await user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return refreshToken;
};

const signup = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if ([fullName, email, password].some((field) => field?.trim() == null)) {
    throw new ApiError(404, "All fields are required");
  }

  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new ApiError(404, "Email id is already is registered ");
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  res.status(201).json({
    success: true,
    user,
  });
});

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((field) => field?.trim() == null)) {
    throw new ApiError(400, "Email and password is required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(400, "Unauthorised User");
  }

  const checkPassword = await user.isPasswordCorrect(password);
  if (!checkPassword) {
    throw new ApiError(400, "Unauthorised User");
  }

  const refreshToken = await generateToken(user._id);

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  res.status(200).cookie("token", refreshToken).json({
    success: true,
    user,
  });
});

const updateUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  // const {fullName}

  const userPrevious = await User.findById(userId);

  res.status(201).json({
    success: true,
    // user,
  });
});

module.exports = { signup, signin, updateUser };
