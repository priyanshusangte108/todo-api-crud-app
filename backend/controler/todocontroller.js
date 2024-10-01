
// const expressAsyncHandler = require("express-async-handler");
// const todo = require("../models/todomodel");

const expressAsyncHandler = require("express-async-handler");
const todo = require("../models/todomodel");

//get all todo
const gettodos = expressAsyncHandler(async (req,res)=>{
    const todos = await todo.find();

    if (!todos) {
        res.status(402);
        throw new error("todo not found");
    }
    res.status(200).json(todos);
});

//get single todo
const gettodo = expressAsyncHandler(async (req,res)=>{
    const todoing = await todo.findById(req.params.id);

    if (!todo) {
        res.status(404);
        throw new error("todo not found");
    }
    res.status(200).json(todoing);
});

//add todo
const addtodo = expressAsyncHandler(async (req,res)=>{
const {title , description , author} = req.body
const addTODO = await todo.create({
    title, description , author
})

res.json(addTODO)
  
})
  //update todo
const updatetodo = expressAsyncHandler(async (req,res)=>{
    const updatedtodo = await todo.findByIdAndUpdate(req.params.id,req.body , {new : true});

    if (!updatedtodo) {
        res.status(401);
        throw new error("todo not updaded");
    }
    res.status(200).json(updatedtodo);
});

//remove todo
const removetodo = expressAsyncHandler(async(req,res) => {
    await todo.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
    })
})
  
module.exports = {gettodos,gettodo, addtodo,updatetodo,removetodo}
