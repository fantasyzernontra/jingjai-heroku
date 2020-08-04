const mongoose = require('mongoose')

const coffinSchema = new mongoose.Schema({
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

const StandardAdultCoffin = mongoose.model('StandardAdultCoffin', coffinSchema)

module.exports = StandardAdultCoffin