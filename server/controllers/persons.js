const mongoose = require('mongoose');
var Person = require('../models/person')

module.exports.index = function(req, res){
    Person.find({}, function(err, persons){
        if(err){
            res.json({message: "Error", error: err});
        }
        else {
            res.json({message: "Success", data: persons});
        }
    })
}

module.exports.create = function(req, res){
    var person = new Person({name: req.params.name});
    person.save(function(err){
        if(err) {
            res.json({message: "Error", error: err});
        }
        else {
            res.redirect("/"+person.name);
        }
    })

}

module.exports.delete = function(req, res){
   Person.remove({name: req.params.name}, function(err){
        if(err){
        res.json({message: "Error", error: err});
    }
        else {
        res.redirect("/");
    }
   })
}

module.exports.show = function(req, res){
    Person.findOne({name: req.params.name}, function(err, persons){
        if(err){
            res.json({message: "Error", error: err});
        }
        else {
            res.json({message: "Success", data: persons});
        }
    })
}