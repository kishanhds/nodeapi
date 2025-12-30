require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const usersRoutes = require("./routes/users");

const app = express(); // ✅ app MUST be created first

app.use(cors());
app.use(express.json());

// ✅ mount routes AFTER app is created
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Auth API running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
