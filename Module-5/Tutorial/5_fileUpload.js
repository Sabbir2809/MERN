const express = require('express');
const multer = require('multer');

const app = express();

let storage = multer.diskStorage({
  destination: function (req, file, callBack) {
    callBack(null, './assets/uploads');
  },
  filename: function (req, file, callBack) {
    callBack(null, file.originalname);
  },
});

let upload = multer({ storage: storage }).single('myfile');

app.post('/', (req, res) => {
  upload(req, res, function (error) {
    if (error) {
      res.send('Error Uploading File');
    } else {
      res.send('File Upload Successfully');
    }
  });
});

app.listen(3000, () => {
  console.log(`Listening on port http://localhost:3000`);
});
