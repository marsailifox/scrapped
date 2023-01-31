const Post = require("../models/post");

exports.createPost = (req, res) => {
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
};

exports.getAllPosts = (req, res) => {
    Post.find()
        .populate("author")
        .exec((err, posts) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(posts);
            }
        });
};

exports.getPost = (req, res) => {
    Post.findById(req.params.id)
        .populate("author")
        .exec((err, post) => {
            if (err) {
            res.status(500).send(err);
            } else {
            res.json(post);
            }
            });
            };
            
            exports.updatePost = (req, res) => {
            Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, post) => {
            if (err) {
            res.status(500).send(err);
            } else {
            res.json(post);
            }
            });
            };
            
            exports.deletePost = (req, res) => {
            Post.findByIdAndRemove(req.params.id, (err, post) => {
            if (err) {
            res.status(500).send(err);
            } else {
            res.json(post);
            }
            });
            };
