var express = require('express');
var router = express.Router();
var tweetsCtrl = require('../controllers/tweets');
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', tweetsCtrl.index);
router.get('/new', ensureLoggedIn, tweetsCtrl.new);
router.get('/:id', tweetsCtrl.show);
router.post('/', ensureLoggedIn, tweetsCtrl.create);

router.post('/tweet', (req, res) => {
    const post = new Post(req.body);
    post.save((err, post) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(post);
    });
  });

module.exports = router;
