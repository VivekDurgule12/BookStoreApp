import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import path from "path"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()

app.use(cors(
    {
    origin:["https://book-store-app-pink.vercel.app/"],
        method:["POST","GET"],
        credentials:true
    }
));
app.use(express.json());

dotenv.config(); 

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

// connect to mongoDB

try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// definging route

app.use("/user",userRoute);
app.use("/book",bookRoute);

// deployement
if(process.env.NODE_ENV === "production"){
    const dirpath = path.resolve();
    app.use(express.static("FRONTEND/dist"));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(dirpath,"FRONTEND","dist","index.html"));
    })
}


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})
