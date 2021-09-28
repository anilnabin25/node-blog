const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require("crypto");
const cors = require("cors")

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, resp) => {
  const comments = commentsByPostId[req.prams.id] || []
  resp.send(comments);
});

app.post('/posts/:id/comments', (req, resp) => {
  const id = randomBytes(4).toString('hex');
  const {content} = req.body;
  const comments = commentsByPostId[req.prams.id] || []
  let newComments = {id, content};
  comments.push(newComments);
  commentsByPostId[req.param.id] = comments;
  resp.status(201).send(comments);
});

app.listen(4001, () => {
  console.log('listening on 4001 ')
})