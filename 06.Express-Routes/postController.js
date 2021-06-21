exports.getPost = (req, res) =>{
  res.send('Render All Post')
}

exports.getSinglePost = (req,res) =>{
  res.send('I am Post = ' + req.params.postId)
}

exports.createPost = (req, res) =>{
  res.send('Create New Post')
}

exports.updatePost = (req, res) =>{
  res.send('Update Your Existing Post = ' + req.params.postId)
}

exports.deletePost = (req, res) =>{
  res.send('Delete Your Existing Post = ' + req.params.postId)
}

