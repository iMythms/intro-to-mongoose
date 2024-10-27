const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
	text: String,
	isComplete: Boolean,
})

// Compile the schema into a model
const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo
