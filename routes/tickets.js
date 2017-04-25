var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://alex:123456@ds143990.mlab.com:43990/sd', ['tickets', 'queues', 'users', 'admins']);

router.get('/tickets/:login', function(req, res, next){
    var login = req.params.login;
    db.tickets.find({author_login: login}, function(err, tickets){
        if(err){
            res.send(err);
        }else{
            res.json(tickets);
        }
    });
});

router.get('/admtickets/:queue', function(req, res, next){
    var queue = req.params.queue;
    console.log(queue);
    db.tickets.find({queue_id: db.ObjectId(queue)}, function(err, tickets){
        if(err){
            res.send(err);
        }else{
            console.log(tickets);
            res.json(tickets);
        }
    });
});

router.post('/createticket', function(req, res, next){
    var ticket = req.body;
    ticket.queue_id = db.ObjectId(ticket.queue_id);
    console.log(ticket.queue_id);
    db.tickets.save(ticket, function(err, ticket){
        if(err){
            res.send(err);
        }else{
            res.json(ticket);
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
    var nextStatus = answer.nextStatus;
    delete answer.id;
    delete answer.nextStatus;
    if(!answer.text || !answer.author){
        res.status(400);
        res.json({"error": "Bad Data"});
    } else {
        db.tickets.update({_id: db.ObjectId(id)}, {$push: {answers: answer}, $set: {status: nextStatus}}, function(err, tickets){
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
    var loginData = req.body;
    console.log(loginData);
    db.users.findOne({$and: [{login: loginData.login}, {pwd: loginData.pwd}]}, function(err, user){
        if(err){
            res.send(err);
        }else{
            if(user !== null){
                res.json(user);
            }else{
                res.json(false);
            }
        }
    });
});

router.post('/loginadm', function(req, res, next){
    var loginData = req.body;
    db.admins.findOne({$and: [{login: loginData.login}, {pwd: loginData.pwd}]}, function(err, user){
        if(err){
            res.send(err);
        }else{
            console.log(user);
            if(user !== null){
                res.json(user);
            }else{
                console.log(user);
                res.json(user);
            }
        }
    });
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