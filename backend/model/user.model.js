const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  cretedOn: { type: Date, dafault: new Date().getTime() },
});

module.exports = mongoose.model("Usert", userSchema);
