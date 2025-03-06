import express from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();
const app = express();
app.use(express.json());
app.use (cors());

const PORT = process.env.PORT!;


app.get("/",(req,res)=>{
    res.send("hello documate")
})

app.listen(PORT, ()=>{
console.log(`server connected: ${PORT}`);

})
    