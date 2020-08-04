const express = require('express')
const Router = express.Router()

const { 
    getAllStandardAdultCoffin,
    getByGenderStandardAdultCoffin,
    getOneStandardAdultCoffin,
    setOneStandardAdultCoffin,
    updateOneStandardAdultCoffin
 } = require('../controllers/standardAdultCoffinControllers')

Router.get('/coffin/standardAdult', getAllStandardAdultCoffin)

Router.get('/coffin/standardAdultOne', getOneStandardAdultCoffin)

Router.get('/coffin/standardAdult/gender', getByGenderStandardAdultCoffin)

Router.post('/coffin/standardAdult/', setOneStandardAdultCoffin)

Router.patch('/coffin/standardAdult/', updateOneStandardAdultCoffin)

module.exports = Router