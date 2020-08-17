const express = require("express");
const Wedding = require("../../models/Wedding");
const User = require("../../models/User");
const { loginCheck } = require("../auth/middlewares");
const router = express.Router();

router.get("/:id", loginCheck(), (req, res) => {
  Wedding.findById(req.params.id)
    .populate("owner")
    .populate("guests")
    .populate("contact")
    .populate("gallery")
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

router.put("/test/:id", async (req, res) => {
  // return res.json({...req.body})
  try {
    const {
      eventName,
      eventTime = new Date(),
      eventLocation,
      eventDescription,
    } = req.body;
    const wedding = await Wedding.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          events: {
            name: eventName,
            time: eventTime,
            location: eventLocation,
            description: eventDescription,
          },
        },
      },
      { new: true }
    );

    res.json(wedding);
  } catch (error) {
    console.log(error);
    res.json(false);
  }
});
router.put("/deleteevent", loginCheck(), async (req, res) => {
  try {
    const { events } = req.body;
    const eventList = await Wedding.findByIdAndUpdate(
      req.user.wedding,
      { events },
      { new: true }
    );
    res.status(200).json(eventList);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.put("/:id", loginCheck(), async (req, res) => {
  try {
    const {
      story,
      date,
      dresscode,
      eventName,
      eventTime,
      eventLocation,
      eventDescription,
    } = req.body;
    // console.log("req.body", req.body);
    let wedding;
    const eventStuff = {
      eventName,
      eventTime,
      eventLocation,
      eventDescription,
    };
    const canEditEvent =
      Object.values(eventStuff).filter((el) => el).length === 4;
    if (canEditEvent)
      wedding = await Wedding.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            events: {
              name: eventName,
              time: eventTime,
              location: eventLocation,
              description: eventDescription,
            },
          },
        },
        { new: true }
      );
    else {
      wedding = await Wedding.findByIdAndUpdate(
        req.params.id,
        { story, date, dresscode },
        { new: true }
      );
    }
    res.status(200).json(wedding);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", loginCheck(), async (req, res) => {
  try {
    const users = await User.deleteMany({ wedding: req.params.id });
    const wedding = await Wedding.findByIdAndDelete(req.params.id);
    res.status(200).json(wedding);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
