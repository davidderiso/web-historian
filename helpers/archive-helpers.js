var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

var sitesObj = {};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!
exports.readListOfUrls = function(){
  // if urlList is empty or if sites.txt has changed since last load, then re-load

  // Check if sitesObj is empty
  if (Object.keys(sitesObj).length > 0) {
    // If not empty return sitesObj
    return sitesObj;
  }
  // Else readFile and build sitesObj
  fs.readFile(exports.paths.list, {encoding: 'utf8'}, function(err, sites){
    // sites holds reference to our data.
    sites = sites.split('\n');
    for (var i = 0; i < sites.length; i++) {
      if (sites[i].length > 0) {
        sitesObj[sites[i]] = true;
      }
    }
    return sitesObj;
  });
};

exports.isUrlInList = function(searchUrl){
  // Read sites file -- Assume it returns an object hash.
  var urlList = exports.readListOfUrls();
  console.log(Object.keys(urlList));
  // If searchUrl in object
    // Return true
  // Else
    // Return false
};

exports.addUrlToList = function(){
  // Adjust sites.txt AND sitesObj
};

exports.isURLArchived = function(){
};

exports.downloadUrls = function(){
};
