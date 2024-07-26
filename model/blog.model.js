const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: String,
    body: String,
    userId: String,
    username: String,
  },
  {
    versionKey: false,
  }
);

const blogModel = mongoose.model("blogs", blogSchema);

module.exports = {
  blogModel,
};
