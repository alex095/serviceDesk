var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://alex:123456@ds143990.mlab.com:43990/sd', ['tickets', 'queues']);

router.get('/tickets/:login', function(req, res, next){
    var login = req.params.login;
    console.log(login);
    db.tickets.find({author_login: login}, function(err, tickets){
        if(err){
            res.send(err);
        }else{
            res.json(tickets);
        }
    });
});

router.get('/answers/:id', function(req, res, next){
    var id = req.params.id;
    console.log(id);
    db.tickets.find({_id: db.ObjectId(id)}, function(err, tickets){
        if(err){
            res.send(err);
        }else{
            
            res.json(tickets);
        }
    });
});

router.post('/addanswer', function(req, res, next){
    var answer = req.body;
    var id = answer.id;
    delete answer.id;
    if(!answer.text || !answer.author){
        res.status(400);
        res.json({"error": "Bad Data"});
    } else {
        db.tickets.update({_id: db.ObjectId(id)}, {$push: {answers: answer}}, function(err, tickets){
        if(err){
            res.send(err);
        }else{
            res.json(tickets);
        }
    });
    }
});

router.get('/queues', function(req, res, next){
    db.queues.find(function(err, queues){
        if(err){
            res.send(err);
        }else{
            res.json(queues);
        }
    });
});

router.post('/login', function(req, res, next){
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