const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Wedding = require('../../models/Wedding');

router.get('/:id/users', (req, res) => {
  Wedding
    .populate('guests')
    .findById(req.params.id)
    .then(wedding => res.status(200).json(wedding.guests))
    .catch(err => res.json(err))
})

module.exports = router;