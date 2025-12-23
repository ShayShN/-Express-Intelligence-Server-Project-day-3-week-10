import express from "express"
import agentControler from "./routes/agentsR.js"
import reportsControler from "./routes/reportsR.js"



const app = express()
const port = 3001

app.use(express.json())

app.use("/agents", agentControler)

app.use("/reports", reportsControler)
















app.listen(port, ()=>{
    console.log(`server running on  http://localhost:${port}`);
})