// Make express server
// const express = require("express");
// const app = express();
// const http = require("http");
// const {Server} = require ("socket.io");
// const cors = require('cors');
// const dotenv =require('dotenv');

// dotenv.config();

// app.use(cors());

//  const server = http.createServer(app);
// const io = new Server(server,{
//   cors : {
//     origin :" http://localhost:3000",
//     methods : ["GET , POST"] 
//   }

// });

// io.on("connection",(socket) =>{
//   console.log(`User Connected! : ${socket.id}`);
// });



// //const {admin} = require("./service/initializeUser")
// const port = process.env.PORT || 8080;
// app.use(express.json());




// const userRoutes = require("./routes/User");
// app.use("/user", userRoutes);

// const authRoutes = require("./routes/Auth");
// app.use("/auth", authRoutes);
 

// const demandPredictRoutes = require("./routes/Demandprediction");
// app.use("/demandpred", demandPredictRoutes);

// const chatRoutes = require("./routes/ChatRoutes");
// app.use("/abc", chatRoutes);


// app.use(express.static('public'));







// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`); 
//  console.log("test");
// });


const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();



app.use(cors());

const server = http.createServer(app);  // Use http.createServer to create the server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",  
    methods: ["GET", "POST"] // Fix the comma here
  }
});

io.on("connection", (socket) => {
  console.log(`User Connected! : ${socket.id}`);

  socket.on("sendMessage" , (data) => {
    console.log("here it is!!!")
    console.log(data)
    io.emit("recieveMessage", data);
    // socket.broadcast.emit("recieveMessage",data);
    
    })





});



// const {admin} = require("./service/initializeUser")
const port = process.env.PORT || 8080;
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const userRoutes = require("./routes/User");
app.use("/user", userRoutes);

const authRoutes = require("./routes/Auth");
app.use("/auth", authRoutes);

const demandPredictRoutes = require("./routes/Demandprediction");
app.use("/demandpred", demandPredictRoutes);

const chatRoutes = require("./routes/ChatRoutes");
app.use("/abc", chatRoutes);


const userProf = require("./routes/userprof");
app.use("/profile", userProf);

const report = require("./routes/report");
app.use("/report", report);

app.use(express.static('public'));

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});








//---------------------------------------------------------------//









// // Make express server
// const express = require("express");
// const app = express();
// const cors = require('cors');
// const dotenv =require('dotenv');

// dotenv.config();
// //const {admin} = require("./service/initializeUser")
// const port = process.env.PORT || 8080;
// app.use(express.json());

// app.use(cors());


// const userRoutes = require("./routes/User");
// app.use("/user", userRoutes);

// const authRoutes = require("./routes/Auth");
// app.use("/auth", authRoutes);
 

// const demandPredictRoutes = require("./routes/Demandprediction");
// app.use("/demandpred", demandPredictRoutes);

// const chatRoutes = require("./routes/ChatRoutes");
// app.use("/abc", chatRoutes);


// app.use(express.static('public'));












// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`); 
//  console.log("test");
// });