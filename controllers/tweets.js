const Tweet = require("../models/tweet");

module.exports = {
    index,
    show,
    new: newTweet,
    create,
}

function index(req, res) {
    Tweet.find({}, function (err, tweets) {
      res.render("tweets/index", { title: "Feed", tweets });
    });
}
  
function show(req, res) {
    Tweet.findById(req.params.id)
      .exec(function (err, tweet) {
          res.render("tweets/show", { title: "Yell", tweet});
      });
}
  
function newTweet(req, res) {
    res.render("tweets/new", { title: "Post" });
}
  
function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === "") delete req.body[key];
    }
 
    const tweet = new Tweet(req.body);
    tweet.save(function (err) {
      if (err) return res.redirect("/tweets/new");
      console.log(tweet);
      res.redirect(`/tweets/${tweet._id}`);
    });
}
  