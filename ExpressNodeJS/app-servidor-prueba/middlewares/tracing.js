var express = require('express');
var router = express.Router();

var tracing = (req, res, next) => {
  res.cookie('tracing', req._parsedOriginalUrl.path , {expire : new Date() + 9999});
  return next();
};
module.exports = tracing;