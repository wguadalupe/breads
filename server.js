// DEPENDENCIES
const express = require('express');
const path = require('path');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.set('views', path.join(__dirname, 'views')); // Adjusted the views path using path.join
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads');
});

// Breads
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);

// 404 Page
app.get('*', (req, res) => {
  res.send('404');
});

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
