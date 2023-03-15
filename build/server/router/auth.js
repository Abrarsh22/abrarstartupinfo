const express = require("express");
const router= express.Router();
require('../app');
const User = require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send("Hello from abrar via auth.js and router js")
});

router.post('/signup',async (req,res)=>{
    console.log("hello");
    res.json({message:req.body});
   // res.send("My register page");
    const {name,email,sname,sugg}=req.body;
    
    if(!name || !email || !sname || !sugg){
        return res.status(400).json({error:"Please fill all the fields"});
    }
    try{
        const user = new User({name,email,sname,sugg});
        await user.save();
        res.status(201).json({message:"Registered successfully"});
  }catch(err){
        console.log(err);
    }
});
   

module.exports=router;

