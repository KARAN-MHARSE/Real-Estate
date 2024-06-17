const v2 = require("cloudinary");
const fs = require("fs");

v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (filepath) => {
  try {
    const res = await v2.uploader.upload(filepath, {
      resource_type: "auto",
    });
    fs.unlinkSync(filepath);
    return res;
  } catch (error) {
    fs.unlinkSync(filepath);
    return null;
  }
};

module.exports = { uploadOnCloudinary };
