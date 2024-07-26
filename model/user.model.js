const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: String,
    email: String,
    pass: String,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = {
  UserModel,
};
