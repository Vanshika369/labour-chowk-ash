// server/models/employer.js

const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: {type: String, required: true},
  address: {type: String, required: true},
});

const Employer = mongoose.model('employer', employerSchema);

module.exports = Employer;