const mongoose = require('mongoose');
var Task = require('../models/task')

module.exports.index = function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            res.json({message: "Error", error: err});
        }
        else {
            res.json({message: "Success", data: tasks});
        }
    })
}

module.exports.create = function(req, res){
    var task = new Task({title: req.body.title, description: req.body.description, completed: req.body.completed});
    task.save(function(err){
        if(err) {
            res.json({message: "Error", error: err});
        }
        else {
            res.send(task);
        }
    })

}

module.exports.delete = function(req, res){
   Task.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
        res.json({message: "Error", error: err});
    }
        else {
            res.send("Deleted this Task");
    }
   })
}

module.exports.show = function(req, res){
    Task.findById({_id: req.params.id}, function(err, tasks){
        if(err){
            res.json({message: "Error", error: err});
        }
        else {
            res.json({message: "Success", data: tasks});
        }
    })
}

module.exports.update = function(req, res){
    Task.findById(req.params.id, function(err, task){
        if(err){
            res.json({message: "Error", error: err});
        }
        else {
            task.title = req.body.title
            task.description = req.body.description
            task.completed = req.body.completed
            task.save(function(err, fintask){
                if(err){
                    res.json({message: "Error", error: err});
                }
                else {
                    res.json(fintask);
                }
            })
        }
    })
}