const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread');

// INDEX
breads.get('/', (req, res) => {
  res.render('index', { // Assuming the view for listing all breads is 'index'
    breads: Bread
  });
});

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
  const arrayIndex = parseInt(req.params.arrayIndex);
  if (Number.isInteger(arrayIndex) && Bread[arrayIndex]) {
    res.render('show', { // Assuming the view file is 'show.jsx'
      bread: Bread[arrayIndex]
    });
  } else {
    res.render('404'); // Render a 404 view instead of just sending text
  }
});


// CREATE
breads.post('/', (req, res) => {
  console.log(req.body)
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = 'true'
  } else {
    req.body.hasGluten = 'false'
  }
  Bread.push(req.body)
  res.redirect('/breads')
})


module.exports = breads;
