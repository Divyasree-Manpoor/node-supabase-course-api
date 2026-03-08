import express from "express"
import dotenv from "dotenv"
import logger from "./middleware/logger.js"
import cors from "cors"
import courseRoutes from "./routes/courses.js";
dotenv.config()

const app=express()

 app.use(cors())
 app.use(express.json())
 app.use(logger)

 app.use("/",courseRoutes)


 const PORT=process.env.PORT||2426
app.listen(PORT,()=>{
    console.log("server running on port of 2426")
})