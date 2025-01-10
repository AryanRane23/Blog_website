import express from "express";
const app = express();
const port = 8080
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import path from 'path'  
import blogRoutes from './routes/users.js'

 // to connect server
app.use(cors());

// parse the incoming request body i.e "the form body" and make it accessible as a JavaScript object in your server code.
app.use(bodyParser.json()); 

 // Middleware to serve static files from the 'uploads' folder
app.use("/uploads", express.static(path.join(path.resolve(), "backend/uploads")));

// set up routes
app.use('/', blogRoutes); // Blog-related routes

// connect to database
mongoose.connect("mongodb://localhost:27017/post_blog")  // connect to MongoDB
    .then(() => console.log("MongoDB connected"))
    .catch(() => console.log("MongoDB Connectiong error"))

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})