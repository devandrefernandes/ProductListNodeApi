const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Init app
const app = express();
app.use(express.json());
app.use(cors());

//Start connection DB
mongoose.connect('mongodb://localhost:27017/NodeApi', { useNewUrlParser: true });

requireDir('./src/models');

//Routes
app.use('/api', require('./src/routes'));

app.listen(3001);