 require("dotenv").config();
 const express = require("express");
 const mongoose =require("mongoose");
 const cors = require("cors");

 const studentRoutes = require("./routes/studentRoutes");
 const courseRoutes = require("./routes/courseRoutes");
 const contectRoutes = require("./routes/contectRoutes");

 const app = express();

 app.use(cors());
 app.use(express.json());

 app.use("/api/students", studentRoutes);
 app.use("/api/course", courseRoutes);
 app.use("/api/contect", contectRoutes);

 app.get("/",(req,res)=>{
    res.send("learnHub API is running");
 });
 const PORT = process.env.PORT || 5000;

 mongoose.connect(process.env.MONGO_URI)
 .then(()=>{console.log("MongoDB connected");

 app.listen(PORT, () =>console.log(`server running on http://localhost:${PORT}` ))
 })
 .catch((err)=>console.error("MongoDB.connection error:", err.message));

//ubaidrazashaikh88_db_user
// mongodb+srv://ubaidrazashaikh88_db_user:IxKro79l9bGkI4vu@cluster0.os8y7s4.mongodb.net/
//IxKro79l9bGkI4vu