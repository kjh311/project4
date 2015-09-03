var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    // User = require('./app/models/user'),
    port = process.env.PORT,
    path = require('path'),
    apiRouter = express.Router();

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

app.get('/', function(req, res) {
  res.send('Welcome to the home page!');
});

apiRouter.use(function(req, res, next) {
  console.log('someone came to our app!');
  next();
})

apiRouter.get('/', function(req, res) {
  res.json({ message: 'hooray! Welcome to our api!'});
});

app.use('/api', apiRouter);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(3000);
console.log('The port is on 3000.');



// mongoose.connect('mongoose://node:noder@novus.modulusmongo.net:27017/Iganic8o');
