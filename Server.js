require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const TodoModel = require('./models/Todos')

const app = express()
app.use(cors())
app.use(express.json())

PORT = 3500

// crud operations

app.post('/add', (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.post('/todo/add', (req, res) => {
    TodoModel.create(req.body)
        .then(todos => res.json(todos))
        .catch(err => res.json(err))
})

app.get('/', (req, res) => {
    UserModel.find(req.params)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/todo', (req, res) => {
    TodoModel.find(req.params)
        .then(todos => res.json(todos))
        .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params
    UserModel.findByIdAndDelete({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/todo/delete/:id', (req, res) => {
    const { id } = req.params
    TodoModel.findByIdAndDelete({ _id: id })
        .then(todos => res.json(todos))
        .catch(err => res.json(err))
})

app.put('/todo/update/:id', (req, res) => {
    const { id } = req.params
    TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
        .then(todos => res.json(todos))
        .catch(err => res.json(err))
})

mongoose.connect(process.env.APIBASE_URL)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})