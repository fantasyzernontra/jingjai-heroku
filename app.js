const express = require('express')
const app = express()
const cors = require('cors')

const StandardAdultCoffinRoute = require('./src/routers/standardAdultCoffin')
const StandardChildCoffinRoute = require('./src/routers/standardChildCoffin')
const ModernAdultCoffinRoute = require('./src/routers/modernAdultCoffin')
const ModernChildCoffinRoute = require('./src/routers/modernChildCoffin')

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));

app.use(express.json())

app.use(StandardAdultCoffinRoute)

app.use(ModernAdultCoffinRoute)

app.use(StandardChildCoffinRoute)

app.use(ModernChildCoffinRoute)

module.exports = app


