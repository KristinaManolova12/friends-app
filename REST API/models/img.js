var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ImgSchema = new Schema({
    img: String
   
});
module.exports = mongoose.model('Img', ImgSchema);