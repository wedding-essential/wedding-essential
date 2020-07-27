const express = require("express");
const Wedding = require("../../models/Wedding");
const User = require("../../models/User");
const {loginCheck} = require('../auth/middlewares');
const router = express.Router();


router.get("/:id", loginCheck(), (req, res) => {
  Wedding.findById(req.params.id)
    .populate("owner")
    .populate("guests")
    .populate("contact")
    .then((wedding) => {
      if (!wedding) {
        res.status(404).json(wedding);
      } else {
        res.status(200).json(wedding);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", loginCheck(), async (req, res) => {
  try {
    const {story} = req.body;
    console.log('req.body', req.body)
    const wedding = await Wedding.findByIdAndUpdate(req.params.id, {story}, {new: true});
    res.status(200).json(wedding);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", loginCheck(), async (req, res) => {
  try {
    const users = await User.deleteMany({wedding: req.params.id});
    const wedding = await Wedding.findByIdAndDelete(req.params.id);
    res.status(200).json(wedding);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;