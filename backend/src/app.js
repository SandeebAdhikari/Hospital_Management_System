const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;
