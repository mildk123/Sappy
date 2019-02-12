
var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    emp_fname: {
        type: String,
    },
    emp_dept: {
        type: String,
    },
    emp_band: {
        type: String,
    },
    emp_specs: {
        type: Array,
    },
    father_info: {
        type: Object,
    },
    test: {
        type: String
    },
    address : {
        type : Array
    }
});
var employees = mongoose.model('employees', employeeSchema);

module.exports = employees;