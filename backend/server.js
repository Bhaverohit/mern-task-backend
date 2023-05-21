// We need to give our server the permission to access .env file
const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel")
const cors = require("cors")
const taskRoute = require("./routes/taskRoute")
const path = require("path");
const { default: mongoose } = require("mongoose");

// Running Server before connecting the database may produce an error

const app = express();

// The cors must be above routes
app.use(cors({
    origin: ["http://localhost:3000", "https://task-manager.onrender.com"]
}))

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use("/api/task", taskRoute)
// }

// Deployement Code
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")))
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../", "frontend", "build", "index.html")
        )
    })
} else{
    
// Route
app.get("/", (req, res) => {
    res.send("Home Page")
})

}


const PORT = process.env.PORT || 5000;

// const startServer = async () =>{
//     try {
//         // Trying to connect DataBase
//         await connectDB();
      
//         app.listen(PORT, ()=>{
//             console.log(`Server running on port ${PORT}`);
//         })
//     } catch (error) {
//         console.log(error);       
//     }
// }

// startServer();

// Another way to connect database
mongoose.connect(process.env.MONGO_URI).then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }).catch((err) => console.log(err));