
import multer from "multer"; //  multer middleware | for file uploads | npm i multer  |
// import path from "path"; 

// Multer Configuration | storing files/images here and making a path to put in database
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "backend/uploads");  // where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// ** file type **
const upload = multer({
  storage,
  // limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image uploads are allowed!"), false);
    }
  },
});

export default upload;