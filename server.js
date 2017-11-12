const express = require('express');
const app = express();

const path = require('path');

const build_path = path.join(__dirname, 'build');

app.use(express.static(path.join(build_path)));

app.get('/*', (req, res) => {
  res.sendFile(path.join(build_path, 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});
