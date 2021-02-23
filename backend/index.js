const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello')
});

app.use('/api/data', require('./routes/data'));

app.listen(5000, () => {
  console.log('running on Port 5000');
})