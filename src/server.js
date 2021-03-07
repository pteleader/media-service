var express = require('express');
var cors = require('cors');
const { s3Upload } = require('./upload.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(cors());

app.post('/upload/s3', s3Upload.single('file'), (req, res) => {
  console.log("response", req.file);
  res.status(200).json({ success: true, fileLocation: req.file.location });
});

app.get('/health', (req, res) => {
  res.status(200).json({ success: true });
});

// Start the server
app.listen(port, function(err){
  if(err){
   console.log("Server Error: ",err);
 }else{
   console.log('Server started: ', port);
 }
});