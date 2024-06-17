const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { connection } = require("./src/db/connection");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// variables
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routes
const userRoute = require("./src/routes/user.route");
const listingRoute = require("./src/routes/listing.route");
// const listingRoute = require("./src/routes/listing.route");

// routes middleware
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/listing", listingRoute);

// app.use("/api/v1/listing", listingRoute);

// Error Handling middleware
app.use((err, req, res, next) => {
  res.status(400).json({
    success: false,
    message: err.message,
  });
});

const start = async () => {
  connection().then(
    app.listen(port, console.log(`The server is running on port ${port}`))
  );
};
start();
