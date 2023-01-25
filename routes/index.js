var express = require('express');
var router = express.Router();
const passport = require('passport')
const Tweet = require("../models/tweet");


/* GET home page. */

router.get('/tweets', (req, res) => {
  Tweet.find((err, tweets) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(tweets);
  });
});

router.get('/', function(req, res, next) {
  res.render('tweets', { title: 'Yell' });
});

router.get('/', function(req, res, next) {
  res.redirect('/tweets');
});

router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    prompt: "select_account"
  }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/tweets',
    failureRedirect: '/tweets'
  }
))

router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/tweets')
  })
})

module.exports = router;
