let mongoose = require('mongoose');

mongoose.connect('mongodb://Boss:Boss123@ds135974.mlab.com:35974/emp_mgnt', { useNewUrlParser: true });

module.exports = mongoose;