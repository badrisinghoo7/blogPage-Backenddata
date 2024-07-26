const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { blogRouter } = require("./route/blog.route");
const { userRouter } = require("./route/user.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRouter);
app.use("/users", userRouter);
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
