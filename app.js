var express = require('express');
var app = express();
var fs = require('fs');

var config = JSON.parse(fs.readFileSync('server_config.json'));
var path = config['web-app-path'];

app.get('/', function (req, res) {
  var options = {
    root: path,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile('index.html', options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent: index.html');
    }
  });
});

app.get('/json_links/:file', function (req, res) {
  var options = {
    root: path + '/app/json_links/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var fileName = req.params.file;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

app.get('/generated/:file', function (req, res) {
  var options = {
    root: path + '/generated/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var fileName = req.params.file;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

app.get('/css/:file', function (req, res) {
  var options = {
    root: path + '/css/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var fileName = req.params.file;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

app.get('/img-refs/:file', function (req, res) {
  var options = {
    root: path + '/img-refs/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var fileName = req.params.file;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

app.listen(8080);
