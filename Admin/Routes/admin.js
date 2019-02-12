const express = require("express");
const routes = express.Router();

const Admin = require('../Model/admin')

// ///////////////// Employees List ////////////////////
routes.get("/login", async (req, res) => {
    console.log('login admin')
    //Check Email
    // const employee = await employees.find({});

    res.status(200).send({ message: "Sahi Hai123 mere bhai" });
    res.end()
})

routes.get("/register", async (req, res) => {
    console.log('Registeration of admin')
    //Check Email
    // const employee = await employees.find({});

    res.status(200).send({ message: "Sahi Hai mere bhai"});
    res.end()
})




module.exports = routes;