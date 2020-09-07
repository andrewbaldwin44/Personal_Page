'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 4000;

const app = express();

const {
  getProjects,
} = require('./handlers/index');

app
.use(function(req, res, next) {
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, HEAD, GET, PUT, POST, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
})
.use(morgan('tiny'))
.use(bodyParser.json())
.use(express.urlencoded({ extended: false }))
.use('/', express.static(__dirname + '/'))
.use(express.static(__dirname))
.use(express.static(path.join(__dirname, 'build')))

.get('/projects', getProjects)

.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

.listen(PORT, () => console.info(`Listening on port ${PORT}`));
