const express = require("express");
const router = express.Router();

const User = require("../../models/User");

// Test route
router.get("/test", (req, res) => res.json({ msg: "In Users" }));

// @route   POST api/users
// @desc    Create user
// @access  Public
router.post("/", (req, res) => {
  if (!req.body.name) {
    return res.status(404).json({ incorrectinput: "Name Field is required" });
  }
  const user = new User({
    name: req.body.name
  });

  user
    .save()
    .then(user => res.json(user))
    .catch(err =>
      res.status(400).json({ usernotcreated: "Unable to create user" })
    );
});

// @route   GET api/users/:user_id
// @desc    Get user
// @access  Public
router.get("/:user_id", (req, res) => {
  User.findById(req.params.user_id)
    .then(user => {
      if (!user) {
        return res
          .status(404)
          .json({ notvaliduser: "Unable to fetch the user" });
      }
      res.json(user);
    })
    .catch(err =>
      res.status(400).json({ notvaliduser: "Unable to fetch the user" })
    );
});

module.exports = router;
