const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const Todo = require('./models/Todo')

const connect = async () => {
	// Connect to MongoDB using the MONGODB_URI specified in our .env file.
	await mongoose.connect(process.env.MONGODB_URI)
	console.log('Connected to MongoDB')

	// Call the runQueries function, which will eventually hold functions to work
	// with data in our db.
	await runQueries()

	// Disconnect our app from MongoDB after our queries run.
	await mongoose.disconnect()
	console.log('Disconnected from MongoDB')

	// Close our app, bringing us back to the command line.
	process.exit()
}

const createTodo = async () => {
	const todoData = {
		// text: 'Learn JS',
		// isComplete: false,
		// text: 'Learn CSS',
		// isComplete: true,
		text: 'Learn React',
		isComplete: true,
	}

	const todo = await Todo.create(todoData)
	console.log('New todo:', todo)
}

const findTodo = async () => {
	const todo = await Todo.find({})
	console.log(`All todo: ${todo}`)
}

const runQueries = async () => {
	console.log('Queries running.')
	// createTodo()
	await findTodo()
}

connect()

/*------------------------------ Query Functions -----------------------------*/
