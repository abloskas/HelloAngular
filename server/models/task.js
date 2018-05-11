const mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false}
}, {timestamp:true});

module.exports = mongoose.model('Task', TaskSchema); 
var Task = mongoose.model('Task');