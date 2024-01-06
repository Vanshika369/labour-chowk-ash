// server/models/worker.js

const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: {type: String, required: true},
  address: {type: String, required: true},
  address: { type: String, required: true },
  skills: [{ type: String }],
});

const Worker = mongoose.model('worker', workerSchema);

module.exports = Worker;