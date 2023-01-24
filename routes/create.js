app.post('/tweet', async (req, res) => {
    try {
      const tweet = new Tweet({
        user: req.body.user,
        message: req.body.message
      });
      await tweet.save();
      res.status(201).json(tweet);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  app.get('/tweets', async (req, res) => {
    try {
      const tweets = await Tweet.find();
      res.json(tweets);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  