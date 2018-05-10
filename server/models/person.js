const mongoose = require('mongoose');
var PersonSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please enter a name"], minlength: [6, "min length 6 characters"]}
}, {timestamp:true});

module.exports = mongoose.model('Person', PersonSchema); 
var Person = mongoose.model('Person');