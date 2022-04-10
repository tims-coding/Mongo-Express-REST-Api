require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const subsRouter = require("./routes/subscribers");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

db.once("open", () => {
  console.log("connected to DB");
});

app.use(cors());
app.use(bodyParser.json());

app.use("/subs", subsRouter);

app.listen(5555, () => {
  console.log("server started");
});
