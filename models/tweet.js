const Tweet = mongoose.model('Tweet', tweetSchema);
const Schema = mongoose.Schema

const tweetSchema = new mongoose.Schema({
    user: String,
    message: String,
    date: { type: Date, default: Date.now }
  });
  