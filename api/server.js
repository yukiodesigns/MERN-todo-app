const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const todo = require('./models/todo')

const app = express()
const port = 4001

app.use(express.json())
app.use(cors())
app.listen(port, ()=> console.log(`server is running on port ${port}`))


const connectionString = process.env.MONGO_URI
mongoose.connect(connectionString).then(()=> console.log('Connected to the database'))
.catch((err)=>console.log('Connection eroor:', err))

//CRUD Operations
//GET
app.get('/todo', async (req, res)=>{
    const todos = await todo.find()
    res.send(todos)
})

//POST
app.post('/todo/new', async (req, res)=>{
    const newTask = await todo.create(req.body)
    res.status(201).json({newTask})
})
//DELETE
app.delete('/todo/delete/:id', async(req, res)=>{
    const result = await todo.findByIdAndDelete(req.params.id)
    res.json(result)
})