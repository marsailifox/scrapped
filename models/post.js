const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posts = new Schema({
  tweet: {
      type: String,
      required: true
  },
  author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('Post', posts)
