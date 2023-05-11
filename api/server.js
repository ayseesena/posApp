const { error } = require("console");
const express = require ("express");
const mongoose= require("mongoose");
const app = express();
const cors = require("cors");
const dotenv= require("dotenv");
const port = process.env.Port || 5002;

// routes

const categoryRoute =require("./routes/Categories.js");
const productRoute =require("./routes/products.js");
const billRoute =require("./routes/bills.js");
const authRoute =require("./routes/auth.js");
const userRoute = require("./routes/users.js");



dotenv.config();

const connect =async ()=>{
    try{
await mongoose.connect(process.env.MONGO_URI)
   console.log("mongo ile bağlantı oldu");
} catch(error) {
    throw error
    }
}

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/Categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);





app.get("/", (req,res)=> res.end("hello word"))


app.listen(port,()=> {
    connect();
    console.log(`bir deneme  yapıyoruz ${port} `)
});