// required modules and declare express variable
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// ser express render engine
app.set('view engine', 'jade')
app.set('views', './app/jade/')

// Use middleware
app.use(bodyParser.json())
app.use(express.static('public'));

//  index route
app.get('/', function (req, res) {
  res.render('_landing/index');
});


// webservice action
app.post('/clickAction', function (req, res){
	res.json({"message":"Message received on:", "date":req.body.date});
})


// Handle routes that are not found and give them 404 status
app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

// handling Errors
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }
  res.render('_landing/error',{maintext:'404',subtext:'Sorry We could not find page: '+req.url, normaltext:'here have a potato'});
});

var server = app.listen(4040, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);

});

