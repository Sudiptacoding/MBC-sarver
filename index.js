const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://crud:9WFMSSkH6PmiH6F0@cluster0.orvq7xp.mongodb.net/crud?retryWrites=true&w=majority')
console.log('Db cunnect')


const post_route = require('./routes/postRouts')
app.use(post_route)

app.listen(5000, () => {
    console.log('Https://localhost run 5000')
})