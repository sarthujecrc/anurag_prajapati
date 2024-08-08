const cloudinary = require("cloudinary");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const config = require("../../config/default.js");

cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.API_KEY,
  api_secret: config.API_SECRET,
});

async function uploadimages(req, res, next) {
  try {
    const image = req.file;
    if (!image) {
      return res.status(400).json({ message: "no image is required" });
    }
    const imagePath = image.path;
    const uploadResult = await cloudinary.uploader.upload(imagePath);
    if (!uploadResult) {
      return res.status(400).json({ message: "unable to upload image" });
    }
    return res.status(200).json({
      message: "image is upload successfully",
      imageURL: uploadResult.secure_url,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  } finally {
    try {
      if (req.file) {
        const image = req.file;
        const imagePath = image.path;
        fs.unlinkSync(imagePath);
        console.log("image is deleted succesfully");
      }
    } catch (error) {
      console.log("image is not  deleted successfully");
    }
  }
}

module.exports = { uploadimages };
