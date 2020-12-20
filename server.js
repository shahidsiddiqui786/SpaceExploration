const express = require('express')
const app = express()
require('dotenv').config()
const expressLayouts = require('express-ejs-layouts')
const marsRouter = require('./routes/mars')

const endpoint = process.env.PORT || 3010


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)


app.get('/',(req,res) => {
    res.render('index')
})
app.get('/more', (req,res) => {
    res.render('more/index')
})
app.use('/mars',marsRouter)


app.listen(endpoint,() => console.log("cool, we started") )