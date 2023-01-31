const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Create a new tweet
router.post("/posts", (req, res) => {
  let post = new Post({
    tweet: req.body.tweet,
    author: req.user._id
  });
  post.save()
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(400).send("Error: " + err);
    });
});

// Get all tweets
router.get("/posts", (req, res) => {
  Post.find()
    .populate("author")
    .exec((err, posts) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(posts);
      }
    });
});

// Get a specific tweet
router.get("/posts/:id", (req, res) => {
  Post.findById(req.params.id)
    .populate("author")
    .exec((err, post) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(post);
      }
    });
});

// Update a tweet
router.put("/posts/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, post) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(post);
    }
  });
});

// Delete a tweet
router.delete("/posts/:id", (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err, post) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(post);
    }
  });
});

module.exports = router;

