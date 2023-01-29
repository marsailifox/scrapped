const posts = [];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne
};

function getAll() {
  return posts;
}

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  return posts.find(post => post.id === id);
}

function create(post) {
  post.id = Date.now() % 1000000
  post.done = false
  posts.push(post)
}

function deleteOne(id) {
  id = parseInt(id)
  const idx = posts.findIndex(post => post.id === id)
  posts.splice(idx, 1)
}

function updateOne(formData, id) {
  id = parseInt(id)
  const post = posts.find(post => post.id === id)
  post.post = formData.post
  if(formData.done) {
      post.done = true
  } else {
      post.done = false
  }
}