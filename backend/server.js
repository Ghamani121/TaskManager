const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb://localhost:27017/mydatabase"; // Hardcoded MongoDB URI

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(`${error} did not connect to MongoDB`));

app.use(express.json()); // Middleware for parsing JSON

// Routes
app.use("/api", require("./routes/taskRoutes"));

app.get("/", (req, res) => res.send("Hello from Backend"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
