const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const mongosh = require("mongosh")
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(morgan("common"));
const userroute = require("./routes/index.js")
mongoose
  .connect("mongodb://0.0.0.0:27017/igclone")
  .then(() => {
    console.log("server connected successfully");
  })
  .catch((e) => {
    console.log("error connecting to cluser", e);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api" , userroute);
app.listen(3000, () => {
  console.log(`server listening on Port http://localhost:3000`);
});
