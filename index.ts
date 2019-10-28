import express from 'express';
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.post('/echo', (req, res) => {
  res.send(req.body);
});

const port = 8000;
server.listen(port, () => console.log(`Started on ${port}`));
