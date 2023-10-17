import express from 'express';
import metadata, { middleware as herokuDynoMetadata } from 'heroku-dyno-metadata';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const app = express().use(herokuDynoMetadata());
const port = process.env.PORT || 3000;

console.log(app);
console.log(metadata);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/', (req, res) => {
  const herokuReleaseVersion = process.env.HEROKU_RELEASE_VERSION;
  res.json({ version: herokuReleaseVersion });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
