const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Wedding = require("../../models/Wedding");

router.get("/:id/users", (req, res) => {
  Wedding.findById(req.params.id)
    .populate("guests")
    .populate("owner")
    .then((wedding) => {
      const users = wedding.guests;
      users.push(wedding.owner);
      res.status(200).json(users);
    })
    .catch((err) => res.status(500).json(err));
});

router.put("/:id/user", (req, res) => {
  const { firstName, lastName, food } = req.body;
  User.findByIdAndUpdate(req.user._id, { firstName, lastName, food })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id/user", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
