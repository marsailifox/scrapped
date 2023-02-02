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
  
  module.exports = {
    deleteOne
  };
	
  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = posts.findIndex(post => post.id === id);
    posts.splice(idx, 1);
  }

module.exports = mongoose.model('Post', posts);
