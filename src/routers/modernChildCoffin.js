const express = require('express')
const Router = express.Router()

const {
    getAllModernChildCoffin,
    getByGenderModernChildCoffin,
    getOneModernChildCoffin,
    setOneModernChildCoffin,
    updateOneModernChildCoffin
} = require('../controllers/modernChildCoffinControllers')

Router.get('/coffin/modernChild', getAllModernChildCoffin)

Router.get('/coffin/modernChild/gender', getByGenderModernChildCoffin)

Router.get('/coffin/modernChildOne', getOneModernChildCoffin)

Router.post('/coffin/modernChild', setOneModernChildCoffin)

Router.patch('/coffin/modernChild', updateOneModernChildCoffin)

module.exports = Router