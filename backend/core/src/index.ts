const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req: any, res: any) => {
  res.end('kuku from mentor!');
})

app.listen(3003, () => console.log('server is listening on port 3003'));