import express from 'express';
import path from 'path';

const app = express();

app.get('/*', (req, res) => {
  res.sendFile(Path2D.join(__dirname, 'index.htm'))
})

app.listen(8000, () => console.log('Running on localhost:"8080'));