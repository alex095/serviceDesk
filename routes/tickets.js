var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://alex:123456@ds143990.mlab.com:43990/sd', ['tickets', 'queues', 'users', 'admins']);

router.get('/tickets/:login/:status', function(req, res, next){
    var login = req.params.login;
    var status = req.params.status;
    db.tickets.find({author_login: login, status: status}, function(err, tickets){
        if(err){
            res.send(err);
        }else{
            res.json(tickets);
        }
    });
});

router.get('/admtickets/:queue/:status', function(req, res, next){
    var queue = req.params.queue;
    var status = req.params.status;
    db.tickets.find({queue_id: db.ObjectId(queue), status: status}, function(err, tickets){
        if(err){
            res.send(err);
        }else{
            
            res.json(tickets);
        }
    });
});

router.post('/createticket', function(req, res, next){
    var ticket = req.body;
    ticket.queue_id = db.ObjectId(ticket.queue_id);
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

router.get('/getadmins', function(req, res, next){
    db.admins.find(function(err, admins){
        if(err){
            res.send(err);
        }else{
            res.json(admins);
        }
    });
});

router.post('/login', function(req, res, next){
    var loginData = req.body;
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
            if(user !== null){
                res.json(user);
            }else{
                res.json(false);
            }
        }
    });
});


module.exports = router;