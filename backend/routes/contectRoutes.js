const express = require("express");
const router = express.Router();
const Contect = require("../models/contect");
router.get ("/", async (req,res)=>{
    try{
        const contects = (await Contect.find()).toSorted({
            createdAt: -1});
            res.status(200).json(contects);
    }
    catch(err){
        res.status(500).json({
            message: err.message});
    }
});

// router.get("/:id", async(req,res)=>{
//     try{
//         const student = await Student.findById(req.params.id);
//         if(!student)return res.status(404).json({message:"Student not found"});
//         res.status(200).json(student);
//     }
//     catch(err)
//     {
//         res.status(500).json({message:err.message});
//     }
// });

router.post("/",async(req,res)=>{
    try{
        const{name,email,subject,message}=req.body;
        if(!name || !email || !subject || !message){
            return res.status(400).json({message:"All fields are required"});
        }
        const newContect = new Contect ({name,email,subject,message});
        const saveContect= await newContect.save();
        res.status(201).json(saveContect);
    }
    catch (err){
        res.status(400).json({message:err.message});
    }
});

// router.put("/:id",async(req,res)=>{
//     try{
//         const updateContect =await Contect.findByIdAndUpdate(
//             req.params.id,
//          req.body,
//          {new: true, runValidators: true}
//         );
//         if(!updateContect)return res.status(404).json({message: "Contect not found"});
//         res.status(200).json(updateContect);
//     }
//     catch(err){
//         res.status(400).json({message:err.message});
//     }
// });

router.delete("/:id",async (req,res)=>{
    try{
        const deleteContect = await Contect.findByIdAndDelete(req.params.id);
        if(!deleteContect)return res.status(404).json({message:"Contect not found"});
        res.status(200).json({message:"Contect deleted successfully"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
module.exports =router;