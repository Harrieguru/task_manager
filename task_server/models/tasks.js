const mongoose = require('mongoose');

// create task schema
const taskSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description: {
        type:String,
        required:true
    }
})

// convert schema to model
const Task = mongoose.model('Task',taskSchema);

module.exports = Task;