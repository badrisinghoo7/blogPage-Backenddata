const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.MongoURL);
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/mongo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6")

module.exports = {
  connection,
};
