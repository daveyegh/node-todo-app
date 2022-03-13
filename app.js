const express = require('express');
const cors = require('cors');
const {urlencoded} = require('body-parser');
const morgan = require('morgan');
const app = express();

// connectDb function
const connectDb = require('./db');

// Models
const Todo = require('./models/TodoModel');

app.use(morgan('dev'));
app.use(cors());
app.use(urlencoded({extended: true}));

app.post('/add-todo', (req, res) => {
    const { body } = req;
    const newTodo = new Todo({title: body?.title});

    newTodo.save().then(result => console.log(result, 'saved Successfully')).catch(err => res.json({message: 'Error occurred'}));
    res.send({message: 'Todo added.'})
});

app.get('/all-todos', (req, res) => {
    Todo.find()
        .then(result => res.json(result))
        .catch(err => res.json({message: 'Error occurred'}))
});

app.get('/simple-todo', (req, res)=> {
    const { body } = req;
    Todo.findOne({title: body?.title})
        .then(result => res.json(result))
        .catch(err => res.json({message: 'Error occurred'}));
})

app.delete('/delete-todo', (req, res) => {
    const { body } = req;
    Todo.findOneAndDelete(body?.todoId)
        .then(result => res.json({message: 'Deleted successfully.'}))
        .catch(err => res.json({message: 'Error occurred'}));
});

app.put('/update-todo', (req, res) => {
    const { body } = req;
    Todo.findOneAndUpdate({_id: '622e4ebaf12b3579f20741cf'}, {title: body?.title})
        .then(result => res.json({message: `Updated Successfully. New Title for todo: ${body?.title}`}))
        .catch(err => res.json({message: 'Error occurred'}));
})

app.listen(4050, () => {
    connectDb();
    console.log('Server successfully started on 4050 port')
})