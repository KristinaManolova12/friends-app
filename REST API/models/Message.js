const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, Buffer, ObjectId } = Schema.Types;

const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: "User"
    },
    products: [{ type: ObjectId, ref: "Shop" }]

});

module.exports = new Model('Message', messageSchema);