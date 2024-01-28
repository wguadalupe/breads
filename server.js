// DEPENDENCIES
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT || 3000; // Fallback port if not defined in .env

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB:', process.env.MONGO_URI))
  .catch(err => console.error('Error connecting to MongoDB:', err));


const app = express();

// MIDDLEWARE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads');
});

const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);

app.get('*', (req, res) => {
  res.send('404');
});

// LISTEN
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
