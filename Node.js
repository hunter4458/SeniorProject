const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve the static HTML page
app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, 'your-html-file.html');
  fs.readFile(htmlPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading HTML file');
    } else {
      res.send(data);
    }
  });
});

// Define API routes and logic here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
