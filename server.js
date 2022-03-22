const express = require('express'),
      bodyParser = require('express'),
      jsonServer = require('json-server'),
      morgan = require('morgan'),
      routes = require('./routes.js');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

port = process.env.PORT || 8085;

routes(app);

app.use('/db', jsonServer.router('mock/db.json'));
app.use('/static', express.static(__dirname + "\\mock\\static"));

var server = app.listen(port, function() {
    console.log('Mock server running on port', server.address().port);
})