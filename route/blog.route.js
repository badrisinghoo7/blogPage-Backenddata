const express = require("express");
const { blogModel } = require("../model/blog.model");
const { auth } = require("../middleware/auth.middleware");

const blogRouter = express.Router();

blogRouter.post("/create", auth, async (req, res) => {
  const payload = req.body;
  try {
    const blog = new blogModel(payload);
    await blog.save();
    res.status(201).send({ msg: "A new blog is created" });
  } catch (error) {
    res.send(error);
  }
});

blogRouter.get("/", auth, async (req, res) => {
  try {
    const blogs = await blogModel.find({ username: req.body.username });
    res.status(200).send(blogs);
  } catch (error) {
    res.status(400).send({ error: error });
  }
});



blogRouter.patch("/update/:id", auth, async (req, res) => {
  const { id } = req.params;
  const blog = await blogModel.findOne({ _id: id });
  const payload = req.body;
  try {
    if (req.body.userId === NotBeforeError.userId) {
      await blogModel.findByIdAndUpdate({ _id: id }, payload);
      res.status(200).send({ msg: `Blog with BlogID ${id} is updated` });
    }
  } catch (error) {
    res.send(error);
  }
});

blogRouter.delete("/delete/:id", auth, async (req, res) => {
  const { id } = req.params;
  const blog = await blogModel.findOne({ _id: id });
  const payload = req.body;
  try {
    if (req.body.userId === NotBeforeError.userId) {
      await blogModel.findByIdAndDelete({ _id: id }, payload);
      res.status(200).send({ msg: `Blog with BlogID ${id} is deleted` });
    }
  } catch (error) {
    res.send(error);
  }
});
module.exports = {
  blogRouter,
};
