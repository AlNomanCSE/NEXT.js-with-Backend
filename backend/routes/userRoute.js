const express = require("express");
const app = express();
const mongoose = require("mongoose");
//imported model
const User = require("../models/userModel");
const router = express.Router();

//create new user
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const userData = await User.create({ name, email, age });
    res.status(201).json({ message: "user Added" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
//find all
router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
//find single user by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const showOne = await User.findById({ _id: id });
    res.status(200).json(showOne);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//delete single user by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const showDeletedOne = await User.findByIdAndDelete(id);
    res.status(200).json(showDeletedOne);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
