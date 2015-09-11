var express = require('express'),
    app = express();
    require('dotenv').load();
var bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    // User = require('./app/models/user'),
    request = require('request'),
    port = process.env.PORT || 3000,
    path = require('path'),
    apiRouter = express.Router();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

app.use(morgan('dev'));

// app.get('/', function(req, res) {
//   res.send('Welcome to the home page!');
// });

apiRouter.use('/styles', function(req, res, next) {
  request('http://api.brewerydb.com/v2/styles?key=' + process.env.KEY , function(error, response, body) {
    res.json(JSON.parse(body).data);
  });
});

apiRouter.get('/styles/:id', function(req, res, next) {
  request('http://api.brewerydb.com/v2/style/' + req.params.id + '?key=' + process.env.KEY + '&format=json', function(error, response, body) {
    res.json(JSON.parse(body).data);
  });
});

apiRouter.get('/search', function(req, res, next) {
  var q = req.url.substr(req.url.indexOf('?'));

  request('http://api.brewerydb.com/v2/search' + q, function(error, response, body) {
    res.json(JSON.parse(body).data);
  });
});


apiRouter.get('/breweries/:id', function(req, res, next) {
  request('http://api.brewerydb.com/v2/brewery/' + req.params.id + '?key=' + process.env.KEY + '&format=json', function(error, response, body) {
    res.json(JSON.parse(body).data);
  });
});

apiRouter.post('/breweries/', function(req, res, next) {
  request.post({
    url:  'http://api.brewerydb.com/v2/brewery?key=' + process.env.KEY,
    form: req.body
  }, function(error, response, body){
    if (error)
      res.json({status: 'Error', error: error});

    body = JSON.parse(body);

    res.json({status: 'OK', message: body.message, data: body.data});
  });
});

apiRouter.get('/breweries/:id/beers', function(req, res, next) {
  request('http://api.brewerydb.com/v2/brewery/' + req.params.id + '/beers' + '?key=' + process.env.KEY + '&format=json', function(error, response, body) {
    res.json(JSON.parse(body).data);
  });
});

apiRouter.get('/', function(req, res) {
  res.json({ message: 'hooray! Welcome to our api!'});
});

app.use('/api', apiRouter);

app.get('*', function(req, res) {
  res.render('index');
});

app.listen(port);
console.log('The port is on ' + port + '.');



// mongoose.connect('mongoose://node:noder@novus.modulusmongo.net:27017/Iganic8o');
