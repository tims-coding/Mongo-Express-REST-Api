# Mongo/Express REST Api
### A REST api using MongoDB and Express.js for performing Create, Read, Update, and Delete operations

## All Operations
   READ ALL   |    READ ONE   |  CREATE ONE  |  UPDATE ONE  |  DELETE ONE  |
------------- | ------------- | ------------ | ------------ | ------------ |
get("/")      | get("/:id")   | post("/")    | patch("/:id")| delete("/:id")|

## Mongoose Model
```
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
```
