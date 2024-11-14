const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
   cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => { res.send({ message: 'File uploaded successfully', file: req.file }); });

app.listen(4002, () => console.log('Server running on http://localhost:4002')); 
