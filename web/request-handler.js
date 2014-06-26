var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers.js');

var dirRoot = '/Users/student/Code/daviddavid/2014-06-web-historian/web/public';

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  console.log(req.method + ' ' + req.url);

  if (req.url === '/' || req.url === '/index.html') {
    if (req.method === 'GET') {
      httpHelpers.serveAssets(res, dirRoot + '/index.html');
    } else if (req.method === 'POST') {
      httpHelpers.collectData(req, function(postData) {
        //Check if url is in file -- Expect true/false result.
        archive.isUrlInList(postData);
          // If url in file check if the page is cached
            // return the cached page
          // If url in file and page NOT cached
            // Show loading page
        // If url not in file
          // Add url to file
          // Show loading page

        // archive.readListOfUrls(function(test) {
        //   console.log(test);
          // var buf = new Buffer(test, 'hex');
          // console.log(buf.toString('utf8'));
        // });

      });
      httpHelpers.serveAssets(res, dirRoot + '/loading.html');
    }
  } else if (req.url === '/styles.css') {
    httpHelpers.serveAssets(res, dirRoot + '/styles.css');
  }
  else {
    res.writeHead(404);
    res.end('Not Found :(');
  }
};
