const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    department: { type: String, required: true },
    description: String,
    duration: String, // e.g., "4 Years"
    seats: Number,
});

module.exports = mongoose.model('Course', courseSchema);
