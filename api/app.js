const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  const output = { value: 'Some other text!' };
  res.send(output);
});

app.listen(3001, () => {
  console.log('Server runs on port 3001');
});
