const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');
const ImgSchema = require('../models/img');
const uuidv4 = require('uuid/v4');
const multer =require('multer')
const DIR = './public/';
var mongoose = require('mongoose')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

router.post('/', upload.single('productImg'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const image = req.file.filename
    const img = url + '/' + image
    ImgSchema.create({img}).then(result => {
      res.send({
            message: "Image upload successfully!",
            imageCreated: { productImg: result.img}
        })
    }).catch(err => {
            res.status(500).json({
                error: err
            });
    })

    
})

router.get("/", (req, res, next) => {
   
        ImgSchema.find()
        .then((products) => res.send(products))
        .catch(next);
});



module.exports = router;