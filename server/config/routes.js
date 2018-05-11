var mongoose = require('mongoose');
const tasks = require('../controllers/tasks');

module.exports = function(app){
    app.get('/tasks', function(req, res) {
        tasks.index(req, res);
    })

    app.post('/tasks', function(req, res) {
        tasks.create(req, res);
    })

    app.post('/tasks/delete/:id', function(req, res) {
        tasks.delete(req, res);
    })

    app.get('/tasks/:id', function(req, res) {
        tasks.show(req, res);
    })

    app.put('/tasks/:id', function(req, res) {
        tasks.update(req, res);
    })
}