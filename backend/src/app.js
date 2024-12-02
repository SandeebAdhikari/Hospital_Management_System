const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);

app.use(errorHandler);

module.exports = app;
