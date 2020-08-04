const app = require('./app')
const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 5000
require('./src/db/mongoose')

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`)
})