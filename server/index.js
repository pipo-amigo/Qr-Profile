const multer = require('multer');
const express = require("express");
const fs = require("fs");
const path = require("path");
const crypto = require('crypto');
const app = express();
const { v4: uuidv4 } = require('uuid');
const port = process.env.PORT || 3000;
const cors = require("cors")
app.use(cors())
app.use(express.json());
const uploadDir = './uploads';

if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}
// Define where to store uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  }
});

const upload = multer({ storage: storage });

// Define the upload route
app.post('/upload', upload.fields([
  { name: 'coverPhoto', maxCount: 1 },
  { name: 'profilePicture', maxCount: 1 }
]), (req, res) => {
  // req.files contains the uploaded files
  console.log(req.files);

  res.json({
    message: 'Files uploaded successfully!',
    files: req.files
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
