const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// GET all
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// GET by id
router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

// POST
router.post("/", async (req, res) => {
  const newItem = new Item(req.body);
  const savedItem = await newItem.save();
  res.json(savedItem);
});

// PUT
router.put("/:id", async (req, res) => {
  const updated = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
