var express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(3000);
console.log('The port is on 3000.');


