const express = require("express")

const app = express();

let students = [
    {id: 1, name: "Dayanand", city: "gorkhapur"},
    {id: 2, name: "Sachin", city: "gkp"}
];

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API IS RUNNING");
});

app.get("/students",(req,res)=>{
    res.json({
        message:"ALL students",
        data: students
    });
});

app.post("/students",(req,res)=>{
    const{ id, name, city} = req.body;
    const newStudent = { id,name, city};
    students.push(newStudent);
    res.json({
        message:"Record Added",
        student:newStudent,
        data:students
    })
});


app.listen(3000,()=>{
    console.log("server started");
})

