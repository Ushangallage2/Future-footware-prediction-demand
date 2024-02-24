const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.write('Hello from the backend!');
  res.end("responding ending");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

