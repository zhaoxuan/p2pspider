'use strict';

var P2PSpider = require('./lib');
var fs = require("fs");
var resultFile = './result_file.json'

var p2p = P2PSpider({
  nodesMaxSize: 200,   // be careful
  maxConnections: 400, // be careful
  timeout: 5000
});

fs.fs.appendFileSync(resultFile, "start");

p2p.on('metadata', function (metadata) {
  console.log(metadata);
});

p2p.listen(6881, '0.0.0.0');
