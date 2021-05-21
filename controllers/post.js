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