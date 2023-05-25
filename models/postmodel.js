const mongoose = require('mongoose');
const post = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
});
const postmodel = mongoose.model('items', post);
module.exports = postmodel;