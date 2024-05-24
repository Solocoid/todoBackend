// mongodb+srv://solocoid:Yrohit5450%40@cluster0.q1cwsfy.mongodb.net/

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://solocoid:Yrohit5450%40@cluster0.q1cwsfy.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}