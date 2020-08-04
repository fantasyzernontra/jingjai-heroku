const mongoose = require('mongoose')

const counterSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    counter: {
        type: Number,
        required: true
    }
})

const counter = mongoose.model('counter', counterSchema)

module.exports = counter