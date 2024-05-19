const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    fatherName: String,
    motherName: String,
    education: String,
    address: String
});

module.exports = mongoose.model('Student', studentSchema);
