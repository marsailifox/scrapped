const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posts = new Schema({
  post: {
      type: String,
      required: true
  },
  author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      validate: {
        validator: function(value) {
          return mongoose.Types.ObjectId.isValid(value);
        },
        message: 'Invalid ObjectId'
      }
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('Post', posts);
