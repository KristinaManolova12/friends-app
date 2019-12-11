const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, Buffer, ObjectId } = Schema.Types;

const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean, default: false
    },
    date: { type: Date, default: Date.now },
    author: {
        type: ObjectId,
        ref: "User"
    },
    productAuthorId: {
        type: ObjectId,
        ref: "User" 
    },
    product:{
        type: ObjectId,
        ref: "Shop"
    },
    products: [{ type: ObjectId, ref: "Shop" }]

});

module.exports = new Model('Message', messageSchema);