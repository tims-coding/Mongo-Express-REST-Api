const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subChannel: {
    type: String,
    required: true,
  },
  subDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const SubModel = mongoose.model("sub", subSchema);

module.exports = SubModel;
