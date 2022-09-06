const Userdb = require('../models/model');

//create and save new user
exports.create = (req, res) => {
    const { name, email, gender, status } = req.body;

    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    //new User
    const user = new Userdb({
        name,
        email,
        gender,
        status,
    })
    console.log(req.body)

    //Sove user in the databse
    user.save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                mensagem: err.message || "Some error occurred while creating a create operation"
            });
        });
}

//retrive and return all users/retrive and return a single user
exports.find = (req, res) => {
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

//Update a new idetifield user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
}

//Delete a user with spacifield user id
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}