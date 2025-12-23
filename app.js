import express from "express"
import agentRouter from "./routes/agentsR.js"
import reportsRouter from "./routes/reportsR.js"
import usersRouter from "./routes/usersR.js"




const app = express()
const port = 3001

app.use(express.json())

app.use("/agents", agentRouter)

app.use("/reports", reportsRouter)

app.use("/users", usersRouter)

app.get("/health", (req, res)=>{
    res.json({ok: true })
})















app.listen(port, ()=>{
    console.log(`server running on  http://localhost:${port}`);
})