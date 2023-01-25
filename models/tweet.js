const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetSchema = new mongoose.Schema({
  title: String,
  body: String,
  replies: [{
    body: String,
    author: String,
    createdAt: { type: Date, default: Date.now }
  }]
});
const Tweet = mongoose.model('Tweet', tweetSchema);
  