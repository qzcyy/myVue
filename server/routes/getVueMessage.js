var express = require('express');



const router=express.Router();
router.all('/',(req,res)=>{
    res.send("Hello I am node.js!");    
});
router.all('/getindex',(req,res)=>{
    var sendMsg=[
        'vue',
        'angular',
        'react'
    ];
    res.send(sendMsg);    
});
router.all('/getitems',(req,res)=>{
    res.send({
        items:[
            {
                do:"1",
                msg:"吃饭"
            },
            {
                do:"1",
                msg:"睡觉"
            },
            {
                do:"2",
                msg:"打豆豆"
            },
            {
                do:"1",
                msg:"被豆豆打"
            }
        ]
    });
});
module.exports=router;
