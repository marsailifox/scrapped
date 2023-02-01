const Post = require("../models/post");

module.exports = {
createPost,
getAllPosts,
getPost,
updatePost,
deletePost
};

function createPost  (req, res)  {
    let post = new Post({
      post: req.body.post,
      author: req.user._id
    });
  
    post.save()
      .then(post => {
        return Post.find().populate('author').exec()
      })
      .then(posts => {
        res.render('posts', { posts: posts });
      })
      .catch(err => {
        res.status(400).send("Error: " + err);
      });
  };
  

function getAllPosts  (req, res)  {
Post.find()
.populate("author")
.exec((err, posts) => {
if (err) {
res.status(500).send(err);
} else {
res.render("posts", {posts});
}
});
};

function getPost  (req, res)  {
Post.findById(req.params.id)
.populate("author")
.exec((err, post) => {
if (err) {
res.status(500).send(err);
} else {
res.render("post", {post});
}
});
};

function updatePost  (req, res)  {
Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, posts) => {
if (err) {
res.status(500).send(err);
} else {
res.redirect("/posts/edit");
}
});
};

function deletePost (req, res) {
Post.findByIdAndRemove(req.params.id, (err, post) => {
if (err) {
res.status(500).send(err);
} else {
res.redirect("/posts");
}
});
};