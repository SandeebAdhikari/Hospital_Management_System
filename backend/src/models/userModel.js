const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  dob: Date,
  ssn: String,
});

module.exports = mongoose.model("User", userSchema);
