const res = require("express/lib/response");

const express = require('express')
const router = express.Router();
const Users = require("../models/Users");

router.get("./users", (req, res) => {
    USers.find({}, function (err, data) {
        if (err) {
            throw err;
        } else {
            return res.json({
                data: data,
            })
        }
    });
})

router.post('/users', (req, res) => {
    const reqBody = req.body;
    console.log(reqBody);
    let newUser = new Users(reqBody);
    newUser
        .save()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    res.send("Success")
});

module.exports = router;
