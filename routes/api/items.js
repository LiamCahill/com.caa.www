const express = require("express");
const router = express.Router;

//Item Model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    Get all Items
// @access  Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 }) //sort by desc
    .then((items) => res.json(items));
});

module.exports = router;
