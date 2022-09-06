const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    gender: String,
    status: String,
})

const Userdb = mongoose.model('users', schema);

module.exports = Userdb