// Make express server
const express = require("express");
const app = express();
const cors = require('cors')
const {admin} = require("./service/initializeUser")
const port = process.env.PORT || 8080;
app.use(express.json());

app.use(cors());

const userRoutes = require("./routes/User");
app.use("/user", userRoutes);

const authRoutes = require("./routes/Auth");
app.use("/auth", authRoutes);
 
//admin()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

