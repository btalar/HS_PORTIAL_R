const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Serve the static React build
app.use(express.static(path.join(__dirname, 'client/build')));

// Define your API routes or other server routes as needed

// Handle any other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
