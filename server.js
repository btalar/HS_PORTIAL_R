const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('https://hotelspot-develop-7cbb71ce24bf.herokuapp.com/getHerokuReleaseVersion', (req, res) => {
  const herokuReleaseVersion = process.env.HEROKU_RELEASE_VERSION;
  res.json({ version: herokuReleaseVersion });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
