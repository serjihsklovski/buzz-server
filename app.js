var express = require('express');
var app = express();
var fs = require('fs');

var config = JSON.parse(fs.readFileSync('server_config.json'));
var path = config['web-app-path'];

app.get('/json_links/:file', function (req, res) {
  var options = {
    root: path + '/public/json_links/',
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

app.get('/public/js/:file', function (req, res) {
  var options = {
    root: path + '/public/js/',
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

app.get('/public/css/:file', function (req, res) {
  var options = {
    root: path + '/public/css/',
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

app.get('/public/img/:file', function (req, res) {
  var options = {
    root: path + '/public/img/',
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

app.get('*', function (req, res) {
  var options = {
    root: path,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  
  res.sendFile('public/html/index.html', options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent: index.html');
    }
  });
});

app.listen(8080);
