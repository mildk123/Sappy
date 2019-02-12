const express = require("express");
const routes = express.Router();

const employees = require('../Model/Employees')

// ///////////////// Employees List ////////////////////
routes.get("/get", async (req, res) => {
    console.log('List OF Employees')
    //Check Email
    const employee = await employees.find({});

    res.status(200).send({ message: "Sahi Hai mere bhai", employee: employee });
    res.end()
})

routes.post("/search", async (req, res) => {
    console.log('search employee')
    let searchTerm = req.body.searchTerm
    //Check Email

    const employee = await employees.find({ [req.body.searchCat]: { $regex: new RegExp(searchTerm, "i") } })

    res.status(200).send({ message: "search response", employee: employee });
    res.end()
})

routes.post("/add", async (req, res) => {
    console.log('adding employee')
    let request = req.body

    //Check Email
    const employee = new employees({
        emp_fname: request.fname,
        emp_dept: request.Department,
        emp_band: request.Band,
        emp_specs: [request.Spec1, request.Spec2],
        father_info: { name: request.fatherName },
        address : request.Address
    });
    employee.save()
        .then(() => res.send({ message: "employee inserted successfully!", ok : true }))
        .catch(e => res.send({ message: e.message }))

})



module.exports = routes;