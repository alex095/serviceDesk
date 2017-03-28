var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://alex:123456@ds143990.mlab.com:43990/sd', ['tickets']);

router.get('/tickets', function(req, res, next){
    db.tickets.find({priority: "high"}, function(err, tickets){
        if(err){
            res.send(err);
        }else{
            res.json(tickets);
        }
    });
});

router.post('/login', function(req, res, next){
    console.log(req.body);
    var ob = {
        test1: '1111',
        test2: '2222'
    };
    res.json(ob);
});


router.get('/tasks/:id', function(req, res, next){
    db.tasksCollection.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }else{
            res.json(task);
        }
    });
});

module.exports = router;