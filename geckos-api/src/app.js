import express from 'express';

const app = express();

app.get('/name', (req, res) => {
  res.status(200).json({
    name: 'Jake'
  });
});

app.listen(8080, () => {
  console.log('server started');
});