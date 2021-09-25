const express = require('express');
const User = require('../models/user');
const userController={
    home(req,res,next){
        {
                    return res.render('index.ejs');
        }  
    },
    // dataList(req,res,next){
    //     console.log(req.body);
    //     var cond={};
    //     var sortby={'_id':-1}
    //     if(req.body.user_id !=''){
    //         cond={'assignedBy':req.body.user_id}
    //     }
    //     if(req.body.sortedBy !=''){
    //         sortby={'_id':req.body.sortedBy}
    //     }
    //     var limit=parseInt(req.body.length);
    //     var skips=parseInt(req.body.start);
    //     // console.log(User.find(cond).sort(sortby).limit(req.body.limit));
    //     User.find(cond).sort(sortby).skip(skips).limit(limit).exec((err, data) => {
    //         if(!err){
    //             let result=[];
    //             var counts=1;
    //             data.forEach(function(element, index) { 
    //                 result.push({'counts':counts,'task':element.task,'assignedTo':element.assignedTo,'assignedBy':element.assignedBy,action:'<a href="javascript:void(0)"  user_id="'+element._id+'" class="p-2 edit"><i class="fas fa-edit"></i></a><a href="javascript:void(0)" user_id="'+element._id+'"  class="p-2 delete"><i class="fas fa-trash-alt"></i></a>'});
    //                 counts++;
    //             })
    //             User.countDocuments(cond, function(err, totalCount) {
    //                 res.send({'status':'200','response':result,'recordsFiltered':totalCount,'recordsTotal':(counts*1)-1,'draw':req.body.draw});
    //            });
    //         }else{
    //             res.send({'status':'404','response':err});
    //         }
    //     });
    // },
    assignTask(req,res,next){
        if(req.body.editId==''){
            User.create({
                pmtId: req.body.pmtId,
                project: req.body.project,
                details: req.body.details,
                files:req.body.files,
                status:req.body.status,
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
    // deleteTask(req,res,next){
    //     User.remove({_id:req.body.id},(err,resu)=>{
    //         if(!err){
    //             res.send({'status':'200','Success':'Success!'});
    //         }else{
    //             res.send({'status':'404','Success':'Faild!'});
    //         }
    //     })
    // },
}
module.exports = userController;
