var mongoose = require('mongoose');
// Use native promises for Mongoose
mongoose.Promise = global.Promise;
var path = require('path');
const fs = require("fs");

var models_path = path.join(__dirname, './../models');
mongoose.connect('mongodb://localhost/1955_API');
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
      require(models_path + '/' + file);
     }
  })