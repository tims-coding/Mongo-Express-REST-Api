const express = require("express");
const SubModel = require("../../models/Subscribers");
const router = express.Router();

// Get All
router.get("/", async (req, res) => {
  try {
    const subs = await SubModel.find();
    res.status(200).json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get One
router.get("/:id", getSub, (req, res) => {
  res.send(res.sub);
});

// Create One
router.post("/", async (req, res) => {
  const sub = new SubModel({
    name: req.body.name,
    subChannel: req.body.subChannel,
  });
  try {
    const newSub = await sub.save();
    res.status(201).json(newSub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update One
router.patch("/:id", getSub, async (req, res) => {
  if (req.body.name != null) {
    res.sub.name = req.body.name;
  }
  if (req.body.subChannel != null) {
    res.sub.subChannel = req.body.subChannel;
  }
  try {
    const updatedSub = await res.sub.save();
    res.json(updatedSub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete One
router.delete("/:id", getSub, async (req, res) => {
  try {
    await res.sub.remove();
    res.json({ message: "deleted Subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSub(req, res, next) {
  let sub;
  try {
    sub = await SubModel.findById(req.params.id);
    if (sub == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.sub = sub;
  next();
}

module.exports = router;
