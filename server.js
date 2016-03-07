/**
 * Created by tati on 05.03.16.
 */
var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/'));
server.listen(8080, '127.0.0.1');
console.log('Listening on the port 8080...');