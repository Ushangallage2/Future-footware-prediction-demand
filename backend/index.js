// Make express server
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());


const userRoutes = require("./routes/User");
app.use("/user", userRoutes);

const authRoutes = require("./routes/Auth");
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});