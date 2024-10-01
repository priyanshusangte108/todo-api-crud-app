const express = require("express");
const connectdb = require("./config/db-config");
require("dotenv").config()

const app = express();
const PORT = process.env.PORT 

//db connect
connectdb();
app.use(express.json())
app.use(express.urlencoded({extended :true}))

// //todo routes
app.use("/api/todo",require("./routes/todorouter"))


//body for add 
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/",(req,res)=>{
    res.json({
        msg: " todo 1.0",
    })
})

app.listen(PORT,() =>{
    console.log(`server is ready: ${PORT}`)
})