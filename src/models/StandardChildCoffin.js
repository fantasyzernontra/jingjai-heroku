const mongoose = require('mongoose')

const coffinSchema = mongoose.Schema({
    _id: {
        type: Number
    },
    name:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        default: "Unisex"
    },
    description: {
        type: String,
        default: "ยังไม่มีคำอธิบาย",
    },
    materials: {
        type: Array,
        default: "ยังไม่มีการระบุวัสดุที่ใช้"
    },
    price: {
        type: String
    }
})

const StandardChildCoffin = mongoose.model('StandardChildCoffin', coffinSchema)

module.exports = StandardChildCoffin