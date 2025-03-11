import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import router from "./Routes/route";


dotenv.config();
const app = express();
app.use(express.json());
app.use (cors());

app.use("/genai",router)

const PORT = process.env.PORT!;
app.listen(PORT, ()=>{
console.log(`server connected: ${PORT}`);

})
    