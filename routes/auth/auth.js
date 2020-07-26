const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../../models/User");
const Wedding = require("../../models/Wedding");

router.post("/signup/couple", async (req, res) => {
  const { email, password } = req.body;
  const passcode = Math.floor(100000 + Math.random() * 900000);
  try {
    if (!email) {
      return res.status(400).json({ message: "Your email cannot be empty" });
    }
    if (!password || password.length < 8) {
      return res
        .status(400)
        .json({ message: "Your password must be at least 8 characters long" });
    }

    const checkEmail = await User.findOne({ email });
    if (checkEmail)
      return res.status(400).json({ message: "This email is already taken" });

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    let user = await User.create({ email, password: hash, role: "couple" });

    const wedding = await Wedding.create({
      passcode,
      owner: user._id,
    });

    await User.findOneAndUpdate(
      { email },
      { wedding: wedding._id }
    );

    user = await User.findById(user._id)

    req.login(user, (err) => {
      if (err)
        res.status(500).json({ message: "Error while attempting to login" });
      res.status(200).json(user);
    });
    res.status(200).json(user);
  } catch (err) {
    res.json(err);
  }
});

router.post("/signup/guest", async (req, res) => {
  const { email, password, passcode } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ message: "Your email cannot be empty" });
    }
    if (!password || password.length < 8) {
      return res
        .status(400)
        .json({ message: "Your password must be at least 8 characters long" });
    }
    if (!passcode || passcode.length !== 6) {
      return res
        .status(400)
        .json({ message: "Your passcode must be 6 characters long" });
    }

    const wedding = await Wedding.findOne({ passcode });

    if (!wedding) {
      return res.status(400).json({ message: "Your passcode is invalid" });
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);
      let guest = await User.create({ email, password: hash, role: "guest" });
      
      await Wedding.findByIdAndUpdate(wedding._id, {
        $push: { guests: guest._id },
      });

      await User.findOneAndUpdate(
        { email },
        { wedding: wedding._id }
      );

      guest = await User.findById(guest._id);

      req.login(guest, (err) => {
        if (err)
          res.status(500).json({ message: "Error while attempting to login" });
        res.json(guest);
      });
      res.status(200).json(guest);
    }
  } catch (err) {
    res.json(err);
  }
});

router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    req.login(user, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error while attempting to login" });
      }
      return res.json(user);
    });
  })(req, res);
});

router.delete("/logout", (req, res) => {
  req.logout();
  req.session.destroy(function (err) {
    res.json({ message: "Successful logout"});
  })
});

router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

module.exports = router;
