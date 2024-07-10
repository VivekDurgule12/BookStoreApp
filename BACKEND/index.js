import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: ["https://book-store-app-pink.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());

// Environment variables
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if MongoDB connection fails
});

// Routes
app.use("/user", userRoute);
app.use("/book", bookRoute);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
    const dirpath = path.resolve();
    app.use(express.static(path.join(dirpath, "FRONTEND", "dist")));

    // Serve index.html for any other route
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(dirpath, "FRONTEND", "dist", "index.html"));
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});