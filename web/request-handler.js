var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers.js');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  if (req.url === '/' || req.url === '/index.html') {
    httpHelpers.serveAssets(res, './public/index.html');
  }
  else {
   res.writeHead(404);
   res.end('Not Found :(');
  }
};
