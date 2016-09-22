'use strict';

var P2PSpider = require('./lib');
var fs = require("fs");
var resultFile = './result_file.json'

var p2p = P2PSpider({
  nodesMaxSize: 200,   // be careful
  maxConnections: 400, // be careful
  timeout: 5000
});

p2p.on('metadata', function (metadata) {
  jsonString = JSON.stringify(message);

  fs.appendFile(resultFile, jsonString, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The file was saved!");
    }
  });

});

p2p.listen(6881, '0.0.0.0');
