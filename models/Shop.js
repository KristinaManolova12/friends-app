const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { String, Number, Boolean, ObjectId } = Schema.Types;
const Shop = new Schema (
    {
        type: {
            type: String,
            required:true,
            unique: true
        },
        sex:{
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }

    }
)
// let tshirt = new Shop ({type: 'tshirt', name:'T-shirt', price: 50, image: 'https', description: 'hshfsfhshfs', sex: 'male', size: ['s','m','l']})

module.exports = mongoose.model('shop', Shop)