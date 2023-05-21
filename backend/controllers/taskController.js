const Task = require("../models/taskModel")

// Create A Task
const createTask = async (req, res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)    
    } catch (error) {
        res.status(500).json({msg: error.message});
    }  
}

// Get All Tasks
const getTasks = async (req, res) =>{
    try {
        const task = await Task.find()
        res.status(200).json(task)    
    } catch (error) {
        res.status(500).json({msg: error.message});
    }  
}

// Get A Task
const getATask = async (req, res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findById(id)
        if(!task){
            return res.status(404).json(`No Task Found With ID:${id}`)
        }
        res.status(200).json(task)    
    } catch (error) {
        res.status(500).json({msg: error.message});
    }  
}

// Delete A Task
const deleteTask = async (req, res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id)
        if(!task){
            return res.status(404).json(`No Task Found With ID:${id}`)
        }
        res.status(200).send("Task Deleted Successfully!!!")    
    } catch (error) {
        res.status(500).json({msg: error.message});
    }  
}

// Delete A Task
const updateTask = async (req, res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {new: true, runValidators: true}
        )
        if(!task){
            return res.status(404).json(`No Task Found With ID:${id}`)
        }
        res.status(200).json(task)    
    } catch (error) {
        res.status(500).json({msg: error.message});
    }  
}



module.exports = {
    createTask, // OR createTask: createTask (Key-Values can be same)
    getTasks,
    getATask,
    deleteTask,
    updateTask,
}