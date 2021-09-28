const express = require('express');
const User = require('../models/user');
const userController={
    home(req,res,next){
        {
                    return res.render('index.ejs');
        }  
    },
    dataList(req,res,next){
        console.log(req.body);
        var cond={}; 
        // User.find(cond).sort(sortby).skip(skips).limit(limit).exec((err, data) => {
        User.find(cond).exec((err, data) => {
             if(!err){ 
                    res.send({'status':'200','response':data});
             }else{
                res.send({'status':'404','response':err});
            }
        });
    },
    assignTask(req,res,next){
        console.log(req.body);
        if(req.body.editId==''){
            User.create({
                pmtId: req.body.pmtId,
                project: req.body.project,
                details: req.body.details,
                files:req.body.files,
                status:req.body.status,
                query:req.body.querys,
                satge:req.body.satge,
                username:req.body.username
        },(err,result)=>{
            console.log(result);
                if(!err){
                    res.send({'status':'200','Success':'Success!','message':'Inserted Sucessfully'});
                }else{
                    res.send({'status':'404','Success':'Faild!' ,'err':err});
                }
            })
        }else{
            User.updateOne({'_id':req.body.editId},{'task':req.body.task,'assignedTo':req.body.assignedTo,'assignedBy':req.body.assignedBy,'status':'1'},(err,result)=>{
                if(!err){
                    res.send({'status':'200','Success':'Success!','message':'Updated Sucessfully'});
                }else{
                    res.send({'status':'404','Success':'Faild!','err':err});
                }
            });
        }
    },
    deleteTask(req,res,next){
        User.remove({_id:req.body.username},(err,resu)=>{
            if(!err){
                res.send({'status':'200','Success':'Success!'});
            }else{
                res.send({'status':'404','Success':'Faild!'});
            }
        })
    },
    editTask(req,res,next){
        let cond={'_id':req.body.username};
        User.findOne(cond).exec((err, data) => {
            if(!err){ 
                   res.send({'status':'200','response':data});
            }else{
               res.send({'status':'404','response':err});
           }
       });
    },
}
module.exports = userController;
