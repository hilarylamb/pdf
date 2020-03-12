const express = require('express'); //using express to create routes
const app = express(); //initialize express
const fs = require('fs'); //used to read and create files
const multer = require('multer'); //allow us to upload files to server
const { TesseractWorker } = require('tesseract.js'); //read our images
const worker = new TesseractWorker(); //analyze images with worker

//save all images uploaded in created storage specify file name and where we want
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, './uploads'); //argument path to folder, set destination
  },
  filename: (req, res, cb) => {
    cb(null, req.file);
  }
});

//
const upload = multer({ storage: storage }).single('avatar'); //single file with a field name

app.set('view engine', 'ejs'); //allows us to create file views

app.get('/uploads', (req, res) => {
  console.log('hey');
});
