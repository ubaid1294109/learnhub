require("dotenv").config();
const mongoose = require ("mongoose");
const Course = require ("./models/course");

const sampleCourses = [
    {
        title: "web development",
        description: "learn to build modern websites from scratch using HTML,CSS,andJavaScript.",
        instructor: "sarah ahmed",
        duration: "8 weeks",
        level: "beginner",
        price: "50",
        catagory: "web development",
        image: "https://images.unsplash.com/photop-1547658719-da2b51169166>?w=600",
    },

    {
        title: "javascript essentials",
        description: "master java cript css",
        instructor: "bilal khan",
        duration: "6 weeks",
        level: "beginner",
        price: "30",
        catagory: "programming",
        image: "https://images.unsplash.com/photop-1547658719-da2b51169166>?w=600",
    },

    {
        title: "react.js for beginner",
        description: "build interactive user interfaces with components",
        instructor: "shayan arain",
        duration: "3 weeks",
        level: "beginner",
        price: "40",
        catagory: "frontend",
        image: "https://images.unsplash.com/photop-1547658719-da2b51169166>?w=600",
    },

    {
        title: "node.js& express",
        description: "build powerful backend serversand rest apis with node.js",
        instructor: "ubaid shaikh",
        duration: "5 weeks",
        level: "beginner",
        price: "80",
        catagory: "backend",
        image: "https://images.unsplash.com/photop-1547658719-da2b51169166>?w=600",
    },

    {
        title: "mongodb database",
        description: "learn nosql database, schema",
        instructor: "abdullah",
        duration: "2 weeks",
        level: "beginner",
        price: "90",
        catagory: "database",
        image: "https://images.unsplash.com/photop-1547658719-da2b51169166>?w=600",
    },

    {
        title: "full stack development",
        description: "combine react, node.js ,express and mongodb",
        instructor: "sawera shaikh",
        duration: "1 weeks",
        level: "beginner",
        price: "10",
        catagory: "full stack",
        image: "https://images.unsplash.com/photop-1547658719-da2b51169166>?w=600",
    },
];

mongoose.connect (process.env.MONGO_URI)
.then(async ()=>{
    await Course.deleteMany();
    await Course.insertMany(sampleCourses);
    console.log('sample courses added to MongoDB Atlas');
    mongoose.connection.close();
})
.catch((err)=>console.error("seed error:", err.message));