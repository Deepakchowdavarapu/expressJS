const express = require('express');

const app = express();

let course = [
    {
        id : 1,
        name : 'maths' 
    },  {
        id : 2,
        name : 'maths' 
    },  {
        id : 3,
        name : 'maths' 
    },  {
        id : 4,
        name : 'maths' 
    }
]

app.get('./course',(req,res) => {
    res.json(course);
})


app.listen(3000,()=>{
console.log("serverStarted")
})