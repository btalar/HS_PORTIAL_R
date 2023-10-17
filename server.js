// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const version = process.env.HEROKU_RELEASE_VERSION;

console.log(version, 'MY API KEY');

// Serve the static React build
app.use(express.static(path.join(__dirname, 'client/build')));

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
