const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");
const User = require("../../models/User");

// Test route
router.get("/test", (req, res) => res.json({ msg: "In Posts" }));

// @route   POST api/posts/:user_id
// @desc    Create new post
// @access  Public
router.post("/:user_id", (req, res) => {
  User.findById(req.params.user_id)
    .then(user => {
      if (!user) {
        return res.status(400).json({ notvaliduser: "Not a valid user" });
      }

      if (!req.body.message) {
        return res.status(404).json({ nomessage: "Please enter some message" });
      }

      const attachment = req.body.attachment ? req.body.attachment : "";

      const post = new Post({
        user: req.params.user_id,
        message: req.body.message,
        attachment: attachment
      });

      post
        .save()
        .then(post => res.json(post))
        .catch(err =>
          res.status(400).json({ postnotcreated: "Error while saving post" })
        );
    })
    .catch(err =>
      res.status(400).json({ postnotcreated: "Error while saving post" })
    );
});

// @route   GET api/posts/:user_id
// @desc    Get all the posts by the user
// @access  Public
router.get("/:user_id", (req, res) => {
  Post.find({ user: req.params.user_id })
    .populate("user", ["name"])
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(400).json({ postsnotfetched: "Error fetching the posts" })
    );
});

// @route   GET api/posts/
// @desc    Get all the posts
// @access  Public
router.get("/", (req, res) => {
  Post.find()
    .populate("user", ["name"])
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(400).json({ postsnotfetched: "Error fetching the posts" })
    );
});

module.exports = router;
