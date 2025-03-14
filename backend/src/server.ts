import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import router from "./Routes/route";


dotenv.config();
const app = express();
app.use(express.json());
const corsOptions = {
    origin: ["http://localhost:5176", "http://localhost:5173", "http://localhost:5174" ,"http://localhost:5175", "http://localhost:5177"],
    credentials: true,
  };
  
  app.use(cors(corsOptions));
 

app.use("/genai",router)

const PORT = process.env.PORT!;
app.listen(PORT, ()=>{
console.log(`server connected: ${PORT}`);

})
    