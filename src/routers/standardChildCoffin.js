const express = require('express')
const Router = express.Router()

const {
    getAllStandardChildCoffin,
    getByGenderStandardChildCoffin,
    getOneStandardChildCoffin,
    setOneStandardChildCoffin,
    updateOneStandardChildCoffin
} = require('../controllers/standardChildCoffinControllers')

Router.get('/coffin/standardChild', getAllStandardChildCoffin)

Router.get('/coffin/standardChild/gender', getByGenderStandardChildCoffin)

Router.get('/coffin/standardChildOne', getOneStandardChildCoffin)

Router.post('/coffin/standardChild', setOneStandardChildCoffin)

Router.patch('/coffin/standardChild', updateOneStandardChildCoffin)

module.exports = Router