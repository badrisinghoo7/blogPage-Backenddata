const express = require("express");
const cors = require("cors");
const { connection } = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("This is a home page");
});

app.listen(8080, async () => {
  await connection;
  try {
    console.log("Connected to the server");
    console.log("connected to the DB");
  } catch (error) {
    console.log(error);
  }
});
