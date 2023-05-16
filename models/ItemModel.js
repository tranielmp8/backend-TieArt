const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    artImage: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Item', itemSchema)

