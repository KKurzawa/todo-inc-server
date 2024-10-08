const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    todo: { type: String, required: true, unique: true },
    createdBy: { type: String, required: true },
    done: { type: Boolean, default: false }
})

const TodoModel = mongoose.model('todos', TodoSchema)

module.exports = TodoModel