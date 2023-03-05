const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  username: String,
  gender_user: String,
  email_user: String,
  notelp_user: Number,
  address: String,
  age: Number,
});

module.exports = mongoose.model("users", busSchema);
