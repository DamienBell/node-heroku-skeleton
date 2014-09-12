var express = require('express');
var router = express.Router();


router.get('/', function(req, res){

  var obj= {STATIC_SERVER:process.env.STATIC_SERVER};
  res.render('index', obj);
});

router.get('/api', function(req, res){

    res.json({"test": "foo"});
});

module.exports = router;
