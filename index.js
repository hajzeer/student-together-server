/** @format */

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const postsRouter = require("./src/Routes/postsRouter.js");
const authRouter = require("./src/Routes/authRouter.js");

require("dotenv").config({ path: "./.env" });

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection successfully"))
  .catch((error) => console.error(error));

const app = express();

app.use(
  cors({
    origin: "http://192.168.0.143:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "UPDATE"],
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/posts", postsRouter);
app.use("/api/user", authRouter);

app.use((req, res, next) => {
  res.send("student together backend");
});

app.listen(process.env.PORT || 5000);
