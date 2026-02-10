const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hod: String,
    description: String,
    image: String,
});

module.exports = mongoose.model('Department', departmentSchema);
