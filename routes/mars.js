const express = require('express')
const router = express.Router()

// mars Home Page
router.get('/', (req,res) => {
    res.render('mars')
})

//mars Gallery View
router.get('/:page', (req,res) => {
    res.render('mars/gallery', { page : req.params.page })
})



module.exports = router
