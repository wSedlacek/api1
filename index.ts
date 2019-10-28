import express from 'express';
const server = express();

server.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 8000;
server.listen(port, () => console.log(`Started on ${port}`));
