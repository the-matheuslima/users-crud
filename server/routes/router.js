const express = require('express');
const route = express.Router();

const controller = require('../controller/controller')

route.get('/', (req, res) => {
    res.send('Is working')
})

route.get('/a', (req, res) => {
    res.send('Is working')
})

route.get('/update-user', (req, res) => {
    res.send('Is working')
})

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route