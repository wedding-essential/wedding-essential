const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Wedding = require("../../models/Wedding");
const {loginCheck} = require('../auth/middlewares');


router.get("/:id/users", loginCheck(), (req, res) => {
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

router.put("/:id/user", loginCheck(), (req, res) => {
  const { email, password, firstName, lastName, partnerFirstName, partnerLastName, food } = req.body;
  User.findByIdAndUpdate(req.user._id, { email, password, firstName, lastName, partnerFirstName, partnerLastName, food }, {new :true})
    .then((user) => {
      console.log(user)
      res.json(user)})
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id/user", loginCheck(), async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
