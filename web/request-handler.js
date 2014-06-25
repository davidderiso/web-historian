var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers.js');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  console.log(req.method + ' ' + req.url);

  if (req.url === '/' || req.url === '/index.html') {
    if (req.method === 'GET') {
      httpHelpers.serveAssets(res, '/Users/student/Code/daviddavid/2014-06-web-historian/web/public/index.html');
    } else if (req.method === 'POST') {
      httpHelpers.serveAssets(res, '/Users/student/Code/daviddavid/2014-06-web-historian/web/public/loading.html');
    }
  } else if (req.url === '/styles.css') {
    httpHelpers.serveAssets(res, '/Users/student/Code/daviddavid/2014-06-web-historian/web/public/styles.css');
  }
  else {
    res.writeHead(404);
    res.end('Not Found :(');
  }
};
