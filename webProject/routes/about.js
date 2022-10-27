var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', {
    title: 'About Me!'
  });
});


module.exports = router;

