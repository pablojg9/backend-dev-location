const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes');

const app = express();

mongoose.connect('mongodb+srv://senha:senha@cluster0-wfn8a.mongodb.net/dev?retryWrites=true&w=majority', {
    useNewUrlParser: true,    
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);

