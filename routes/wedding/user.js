const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Wedding = require('../../models/Wedding');

router.get('/:id/users', (req, res) => {
  Wedding
    .findById(req.params.id)
    .populate('guests')
    .populate('owner')
    .then(wedding => {
      const users = wedding.guests
      users.push(wedding.owner)
      res.status(200).json(users)
    })
    .catch(err => res.json(err))
})

router.put('/:id/user', (req, res) => {
  const {firstName, lastName, imgName, imgPath, food } = req.body
  User
    .findByIdAndUpdate("5f1994193bed0787e8545c5c", {firstName, lastName})
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
})

router.delete('/:id/user', async (req, res) => {
  const user = User.findByIdAndDelete("5f1994193bed0787e8545c5c")

})

module.exports = router;