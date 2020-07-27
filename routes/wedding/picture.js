const express = require('express');
const router  = express.Router();

// include the model:
const Picture = require('../../models/Picture');

router.get('/picture', (req, res, next) => {
    Picture.find()
    .then(pictureFromDB => {
        res.status(200).json(pictureFromDB)
    })
    .catch(err => next(err))
})

router.post('/picture/create', (req, res, next) => {
    // console.log('body: ', req.body); ==> here we can see that all
    // the fields have the same names as the ones in the model so we can simply pass
    // req.body to the .create() method
    
    Picture.create(req.body)
    .then( aNewPicture => {
        // console.log('Created new picture: ', aNewPicture);
        res.status(200).json(aNewPicture);
    })
    .catch( err => next(err) )
})

module.exports = router;