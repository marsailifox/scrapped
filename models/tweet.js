const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetSchema = new mongoose.Schema({
  user: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Tweet = mongoose.model('Tweet', tweetSchema);
  