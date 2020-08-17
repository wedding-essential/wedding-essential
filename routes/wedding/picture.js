const express = require("express");
const router = express.Router();
// include the model:
const Picture = require("../../models/Picture");
const Wedding = require("../../models/Wedding");
const User = require("../../models/User");

router.get("/picture", (req, res, next) => {
  Picture.find()
    .then((pictureFromDB) => {
      res.status(200).json(pictureFromDB);
    })
    .catch((err) => next(err));
});

router.post("/picture/create", (req, res) => {
  Picture.create(req.body).then((DBres) => {
    Wedding.findByIdAndUpdate(
      req.body.wedding,
      { $push: { gallery: DBres._id } },
      { new: true }
    )
      .populate("gallery")
      .then((wed) => {
        res.json(wed);
      });
  });
});

router.post("/picture/create/banner", (req, res) => {
  Picture.create(req.body).then((DBres) => {
    Wedding.findByIdAndUpdate(
      req.body.wedding,
      { bannerImgPath: DBres.imageUrl },
      { new: true }
    ).then((wed) => {});
  });
  res.json("banner picture was added");
});

router.post("/picture/create/profile", (req, res) => {
  Picture.create(req.body).then((DBres) => {
    User.findByIdAndUpdate(
      req.body.user,
      { imgPath: DBres.imageUrl },
      { new: true }
    ).then((user) => {});
  });
  res.json("profile picture was added");
});

router.delete("/picture/:id/delete", async (req, res) => {
  const wedding = await Wedding.findByIdAndUpdate(
    req.user.wedding._id,
    { $pull: { gallery: req.params.id } },
    { new: true }
  ).populate("gallery");
  await Picture.findByIdAndDelete(req.params.id).pu;

  res.json(wedding.gallery);
});
module.exports = router;
