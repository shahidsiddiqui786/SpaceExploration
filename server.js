const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const marsRouter = require('./routes/mars')

const endpoint = process.env.PORT || 3000


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', ()=> console.log("yeah! connected to mongoose"))


app.get('/',(req,res) => {
    res.render('index')
})
app.get('/more', (req,res) => {
    res.render('more/index')
})
app.use('/mars',marsRouter)


app.listen(endpoint,() => console.log("cool, we started") )