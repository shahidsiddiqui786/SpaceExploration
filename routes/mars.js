const express = require('express')
const router = express.Router()
const Comment = require('../modals/comment')

// mars Home Page
router.get('/', (req,res) => {
    res.render('mars')
})

//mars Gallery View
router.get('/:page', (req,res) => {
    res.render('mars/gallery', { page : req.params.page })
})

router.get('/gallery/:page/:id', async(req,res) => {
    
    //fetch all the comments
    try {
        const comments = await Comment.find({ postid:req.params.id })
        comments.forEach(ele => console.log(ele.postid))
        res.render('mars/post', { 
            id : req.params.id ,
            page : req.params.page,
            comments : comments
         })
    } catch (error) {
        console.log(error)
        res.render('mars/post', { 
            id : req.params.id ,
            page : req.params.page
         })
    }
})

//someone comment on the post
router.post('/gallery/:page/:id', async(req,res) => {
    const comment = new Comment({
        name: req.body.name,
        postid: req.params.id,
        comment: req.body.comment
    })

    try {
        const newComment = await comment.save()
        console.log(newComment)
        res.redirect( req.params.id )
    } catch (error) {
        console.log(error)
    }
})





module.exports = router
