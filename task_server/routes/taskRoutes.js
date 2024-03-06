const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');

// use route to handle http requests

// retrieve all tasks
router.get('/',async(req,res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    } catch(error) {
        console.error(error);
        res.status(500).json({message:'Server Error'});
    }
})

// retrieve a single task
router.get('/:id',async(req,res) => {
    try{
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch(error) {
        console.error(error);
        res.status(500).json({message:'Server Error'});
    }
})


// create a task
router.post('/',async(req,res) => {
    try{
        const newTask = await Task(req.body);
        newTask.save();
        res.json(newTask);

    } catch(error) {
        console.error(error);
        res.status(500).json({message:'Server Error'});
    }
})

// update task
// update task
router.put('/:id', async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          description: req.body.description,
        },
        { new: true }
      );
      res.json(updatedTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  


// delete task
router.delete('/:id',async(req,res) => {
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.json({message: 'Task deleted successfully.'})
    } catch(error) {

    }
})

module.exports = router;