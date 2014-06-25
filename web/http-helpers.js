var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset) {
  console.log('serving asset ' + asset);
  console.log('PWD: '+process.cwd());

  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  fs.readFile(asset, function(err, data) {
    if (err) {
      console.log('err detected reading file: ' + err);
      res.writeHead(500);
      res.end();
      return;
    }

    var head = headers;
    if (path.extname(asset) === '.css') {
      head = {'Content-Type': "text/css"};
    }
    res.writeHead(200, head);
    res.end(data);
  });

};

// As you progress, keep thinking about what helper functions you can put here!
