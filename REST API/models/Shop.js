const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, Buffer, ObjectId } = Schema.Types;

const shopSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    productImg: {
        type: String,
        required: true
    },
    price: {
            type: Number,
            required: true,
        
    },

    author: {
        type: ObjectId,
        ref: "User"
    },
    user: [{ type: ObjectId, ref: "User" }],

    messages: [{ type: ObjectId, ref: "Message" }]

});

module.exports = new Model('Shop', shopSchema);