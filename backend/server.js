require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT= process.env.PORT || 5000;

mongoose 
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => console.log(`${error} did not connect to MongoDB`));

app.get("/", (req, res) => {
    res.send("Hello from Backend");
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//connect routtes to server.js
const taskRoutes = require("./routes/taskRoutes");
app.use("/api", taskRoutes);

// Middleware
app.use(express.json());


