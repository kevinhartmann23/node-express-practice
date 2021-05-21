const Post = require('../models/post')

let id = 1

const idGenerator = () => {
  return id++
}

exports.getPosts = (req, res) => {
  res.json({
    posts: [
      {
        title: "Post #1",
        id: idGenerator()
      },
      {
        title: "Post #2",
        id: idGenerator()
      },
    ]
  })
}

exports.createPost = (req, res) => {
  const post = new Post(req.body)
  // console.log('CREATING POST: ', req.body)
  post.save((err, result) => {
    if(err) {
      return res.status(400).json({
        error: err
      })
    }

    res.status(200).json({
      post: result
    })
  })
}