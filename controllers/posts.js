const Post = require('../models/post')

module.exports = {
    index,
    show,
    new: newPost,
    create,
    delete: deletePost,
    edit,
    update
}

function index(req, res) {
    res.render('posts/index', {
        posts: Post.getAll(),
        title: 'Noise'
    });
}

function show(req, res) {
    res.render('posts/show', {
        post: Post.getOne(req.params.id),
        title: 'Skill Details'
    })
}

function newPost(req, res) {
    res.render('posts/new', {
        title: 'New Post'
    })
}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Post.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/posts');
}

function deletePost(req, res) {
    Post.deleteOne(req.params.id)
    res.redirect('/posts')
}

function edit(req, res) {
    res.render('posts/edit', {
        title: 'Edit Post',
        post: Post.getOne(req.params.id)
    })
}

function update(req, res) {
    Post.updateOne(req.body, req.params.id)
    res.redirect(`/posts/${req.params.id}`)
}