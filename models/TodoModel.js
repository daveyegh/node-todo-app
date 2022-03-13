const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
})

const todoModel = new model('Todos', todoSchema);

module.exports = todoModel;