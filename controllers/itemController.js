const Item = require('../models/Item');

exports.getAllItems = async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
};

exports.getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
};

exports.createItem = async (req, res) => {
  const newItem = new Item({ ...req.body, images: req.files?.map(f => f.path) || [] });
  const savedItem = await newItem.save();
  res.status(201).json(savedItem);
};