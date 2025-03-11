import express from "express"
import generateContent from "../service/gemini"
const router = express.Router()

router.post("/documate", async(req: express.Request, res: express.Response)=>{
try {
    const prompt = req.body.prompt
    if(!prompt){
      res.status(400).json({message : "Code is Required"})  
      return;
    }
    const response = await generateContent( prompt as string);
    res.status(200).send ({message:response})
} catch (error) {
    res.status(500).send({
        message : "Internal server error"
    })
}
})

export default router