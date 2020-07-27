const express = require('express');
const router = express.Router();
// include the model:
const Picture = require('../../models/Picture');
const Wedding = require("../../models/Wedding")

router.get('/picture', (req, res, next) => {
    Picture.find()
        .then(pictureFromDB => {
            res.status(200).json(pictureFromDB)
        })
        .catch(err => next(err))
})


router.post("/picture/create", (req, res) => {
    console.log(req.body)
    Picture.create(req.body).then(DBres => {
        console.log(DBres)
        Wedding.findByIdAndUpdate(req.body.wedding, { $push: { gallery: DBres._id } }, { new: true }).then(wed => {
            console.log(wed)
        })
    })
    res.json("hello darkness my old friend")
})

router.delete("/picture/:id/delete", async (req, res) => {
    await Wedding.findByIdAndUpdate(req.user.wedding._id, { $pull: { gallery: req.params.id } }, { new: true })
    await Picture.findByIdAndDelete(req.params.id)
    res.json("hello darkness my old friend")
})
module.exports = router;