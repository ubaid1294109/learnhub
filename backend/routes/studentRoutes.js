const express = require("express");
const router = express.Router();
const Student = require("../models/student");
router.get ("/", async (req,res)=>{
    try{
        const students = await Student.find().sort({
            createdAt: -1});
            res.status(200).json(students);
    }
    catch(err){
        res.status(500).json({
            message: err.message});
    }
});

router.get("/:id", async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        if(!student)return res.status(404).json({message:"Student not found"});
        res.status(200).json(student);
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
});

router.post("/",async(req,res)=>{
    try{
        const{name,email,age,city,course,phone}=req.body;
        if(!name || !email || !age || !city || !course|| !phone){
            return res.status(400).json({message:"All fields are required"});
        }
        const newStudent = new Student ({name,email,age,city,course,phone});
        const saveStudent= await newStudent.save();
        res.status(201).json(saveStudent);
    }
    catch (err){
        res.status(400).json({message:err.message});
    }
});

router.put("/:id",async(req,res)=>{
    try{
        const updateStudent =await Student.findByIdAndUpdate(
            req.params.id,
         req.body,
         {new: true, runValidators: true}
        );
        if(!updateStudent)return res.status(404).json({message: "Student not found"});
        res.status(200).json(updateStudent);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
});

router.delete("/:id",async (req,res)=>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!deleteStudent)return res.status(404).json({message:"Student not found"});
        res.status(200).json({message:"Student deleted successfully"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
module.exports =router;