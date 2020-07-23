const express = require("express");
const Wedding = require("../../models/Wedding");
const router = express.Router();

router.get('/:id', (req,res) => {
  console.log(req.params.id)
  Wedding.findById(req.params.id)
  .populate('owner')
  .populate('guests')
  .populate('contact')
  .then(wedding => {
    if (!wedding) {
      res.status(404).json(wedding);
    } else {
      res.status(200).json(wedding);
    }
  })
  .catch(err => {
    res.json(err);
  });
})

module.exports = router;