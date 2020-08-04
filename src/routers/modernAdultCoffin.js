const express = require('express')
const Router = express.Router()

const {
    getAllModernAdultCoffin,
    getOneModernAdultCoffin,
    getByGenderModernAdultCoffin,
    setOneModernAdultCoffin,
    updateOneModernAdultCoffin
} = require('../controllers/modernAdultCoffinControllers')

Router.get('/coffin/modernAdultOne', getOneModernAdultCoffin)

Router.get('/coffin/modernAdult', getAllModernAdultCoffin)

Router.get('/coffin/modernAdult/gender', getByGenderModernAdultCoffin)

Router.post('/coffin/modernAdult/', setOneModernAdultCoffin)

Router.patch('/coffin/modernAdult', updateOneModernAdultCoffin)

module.exports = Router