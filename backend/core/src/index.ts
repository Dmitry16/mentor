import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.end('kuku from mentor!');
})

app.listen(3003, () => console.log('server is listening on port 3003'));