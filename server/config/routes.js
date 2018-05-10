var mongoose = require('mongoose');
const persons = require('../controllers/persons');

module.exports = function(app){
    app.get('/', function(req, res) {
        persons.index(req, res);
    })

    app.get('/new/:name', function(req, res) {
        persons.create(req, res);
    })

    app.get('/remove/:name', function(req, res) {
        persons.delete(req, res);
    })

    app.get('/:name', function(req, res) {
        persons.show(req, res);
    })
}