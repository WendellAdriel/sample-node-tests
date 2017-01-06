const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  let users = [
    { name: 'Wendell', age: 24 },
    { name: 'Brock', age: 18 },
    { name: 'Kaoru', age: 20 },
    { name: 'Leena', age: 27 },
  ]
  res.send(users);
})

app.listen(PORT, () => console.log(`Express server running on port: ${PORT}`));

module.exports = { app };
