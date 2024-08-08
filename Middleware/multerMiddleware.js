const multer = require("multer");
const path = require("path");

const storage = multer.diskStoarge({
  destination: (req, file, cb) => {
    let uploadFolder = "./uploads";
    if (file.fieldname === "Blog") {
      uploadFolder = "./uploads/Blog";
    } else if (file.fieldname === "Post") {
      uploadFolder = "./uploads/Post";
    } else {
      uploadFolder = "./uploads.default.js";
    }
  },
  filename: (req, file, cb) => {
    let uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const uploads = multer({ storage:storage});

module.exports = uploads;

