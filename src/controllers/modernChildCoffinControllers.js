const ModernChildCoffin = require('../models/ModernChildCoffin')
const { getCounter, incrementCounter } = require('../util/counterUtil')

//GET Method
const getAllModernChildCoffin = async (req, res, next) => {
    try {
        const coffin = await ModernChildCoffin.find({}, null, {sort: {'_id': -1}})

        if (!coffin)
            return res.status(404).send({
                ErrorTH: 'Coffin not found. Please Try Again',
                ErrorENG: 'ไม่พบโลงศพที่ค้นหา โปรดลองอีกครั้ง'
            })

        res.status(200).send(coffin)

        next()
    } catch (err) {
        res.status(400).send({
            Error: 'Something Went Wrong. Please Try Again'
        })
    }
}

const getOneModernChildCoffin = async (req, res, next) => {
    try {
        const coffin = await ModernChildCoffin.findOne({ _id: req.body._id })

        if (!coffin)
            return res.status(404).send({
                ErrorTH: 'Coffin not found. Please Try Again',
                ErrorENG: 'ไม่พบโลงศพที่ค้นหา โปรดลองอีกครั้ง'
            })

        res.status(200).send(coffin)

        next()
    } catch (err) {
        res.status(400).send({
            Error: 'Something Went Wrong. Please Try Again'
        })
    }
}

const getByGenderModernChildCoffin = async (req, res, next) => {
    try {
        if (!req.body.gender)
            return res.status(400).send({
                ErrorTH: 'Please Provide Gender',
                ErrorENG: 'โปรดระบุเพศ'
            })

        const coffin = await ModernChildCoffin.find({ gender: req.body.gender })

        if (!coffin)
            return res.status(404).send({
                ErrorTH: 'Coffin not found. Please Try Again',
                ErrorENG: 'ไม่พบโลงศพที่ค้นหา โปรดลองอีกครั้ง'
            })

        res.status(200).send(coffin)

        next()
    } catch (err) {
        res.status(400).send({
            Error: 'Something Went Wrong. Please Try Again'
        })
    }
}

//POST Method
const setOneModernChildCoffin = async (req, res, next) => {
    try {
        const counter = await getCounter("Modern/Child")

        const coffin = new ModernChildCoffin({
            _id: counter,
            name: req.body.name,
            gender: req.body.gender,
            description: req.body.description,
            materials: req.body.materials,
            price: req.body.price
        })

        await coffin.save()
        await incrementCounter("Modern/Child")

        res.status(201).send(coffin)
        next()
    } catch (err) {
        res.status(400).send({
            ErrorENG: 'Uncompleted to save new Coffin. Please Try Again or Contact Technical Support (+66946211452)',
            ErrorTH: 'บันทึกโลงศพไม่สำเร็จ โปรดลองอีกครั้งหรือติดต่อผู้เชี่ยวชาญ (+66946211452)'
        })
    }
}

//PATCH Method
const updateOneModernChildCoffin = async (req, res, next) => {
    const updates = Object.keys(req.body)
    const allowedUpdated = ['_id', 'name', 'gender', 'description', 'materials', 'price']

    const isValidOperation = updates.every(update => allowedUpdated.includes(update))
    if (!isValidOperation)
        return res.status(400).send({
            ErrorENG: "Please Update Information Properly",
            ErrorTH: 'โปรดอัพเดทหรือแก้ไขข้อมูลที่ถูกต้อง'
        })


    try {
        const coffin = await ModernChildCoffin.findOne({ _id: req.body._id })

        if (!coffin)
            return res.status(404).send({
                ErrorTH: 'Coffin not found. Please Try Again',
                ErrorENG: 'ไม่พบโลงศพที่ค้นหา โปรดลองอีกครั้ง'
            })

        updates.forEach(update => coffin[update] = req.body[update])
        await coffin.save()

        res.status(201).send(coffin)
    } catch (err) {
        return res.status(400).send({
            ErrorENG: "Uncompleted to update. Please Try Again or Contact Technical Support (+66946211452)",
            ErrorTH: 'อัพเดทหรือแก้ไขไม่สำเร็จ โปรดลองอีกครั้งหรือติดต่อผู้เชี่ยวชาญ (+66946211452)'
        })
    }
}

module.exports = {
    getAllModernChildCoffin,
    getOneModernChildCoffin,
    getByGenderModernChildCoffin,
    setOneModernChildCoffin,
    updateOneModernChildCoffin
}