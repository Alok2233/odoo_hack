const express = require("express");
const router = express.Router();
const multer = require("multer");
const Item = require("../models/Item");

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

/**
 * @route POST /api/items
 * @desc Add a new item
 */
router.post("/", upload.array("images"), async (req, res) => {
  try {
    const { title, description, category, type, size, condition, tags } = req.body;
    const imagePaths = req.files.map((file) => file.path); // array of file paths

    const newItem = new Item({
      title,
      description,
      category,
      type,
      size,
      condition,
      tags,
      images: imagePaths,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error("POST /api/items failed:", err.message);
    res.status(500).json({ error: "Failed to upload item" });
  }
});

/**
 * @route GET /api/items
 * @desc Get all listed items
 */
router.get("/", async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (err) {
    console.error("GET /api/items failed:", err.message);
    res.status(500).json({ error: "Failed to fetch items" });
  }
});
// GET item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
