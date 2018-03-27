var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../models/Student.js');

//fungsi GET
router.get('/', function(req, res, next){
    Student.find(function(err, student){
        if(err) return next(err);
        res.json(student);
    });
});

//fungsi POST
router.post('/', function(req, res, next){
    Student.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi GET by id
router.get('/:id', function(req ,res, next){
    Student.findId(function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi PUT by id
router.put('/:id', function(req, res, next){
    Student.findByIdUpdate(function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi DELETE by id
router.delete('/:id', function(req, res, next){
    Student.findByIdRemove(function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports= router;