const express = require("express");
const Wedding = require("../../models/Wedding");
const { restart } = require("nodemon");
const User = require("../../models/User");
const router = express.Router();

router.get("/:id", (req, res) => {
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

router.put("/:id", async (req, res) => {
  try {
    const {date, story} = req.body;
    const wedding = await Wedding.findByIdAndUpdate("5f19b89b1aa0c8b111889f8b", {date, story});
    res.status(200).json(wedding);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const users = await User.deleteMany({wedding: req.params.id});
    const wedding = await Wedding.findByIdAndDelete(req.params.id);
    res.status(200).json(wedding);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;