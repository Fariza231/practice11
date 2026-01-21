const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/items", require("./routes/items"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
