const express = require('express')
const cors= require('cors');
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const bodyParsr = require('body-parser')
const ClientRouter = require('./routes/client.router')
app.use(cors());
app.use(bodyParsr.json())
app.use('/clients', ClientRouter)




const connectionParams = {//תקשורת עם המסד נתונים
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)//התחברות למסד נתונים
    .then(() => {
        console.log('connected to db')
    }).catch(err => {
        console.log(err)
    })


app.listen(process.env.PORT, () => { console.log(`listening port ${process.env.PORT}`) })



// const multer = require('multer');
// const uuid = require('uuid');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     const name = uuid.v4();
//     cb(null, name + ext);
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5 // 5 MB
//   },
//   fileFilter: function (req, file, cb) {
//     if (file.mimetype.startsWith('image/')) {
//       cb(null, true);
//     } else {
//       cb(new Error('Only image files are allowed'));
//     }
//   }
// });

// app.post('/api/upload-image', upload.single('image'), (req, res) => {
//   const file = req.file;
//   if (!file) {
//     return res.status(400).send({ message: 'No file uploaded' });
//   }
//   // Handle the uploaded file here
//   res.send({ message: 'File uploaded successfully' });
// });