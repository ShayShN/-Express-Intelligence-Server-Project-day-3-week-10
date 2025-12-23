import express from "express"
import { createAgent } from "../ctrls/agentsC.js"


const route = express.Router()

// app.get("/agents")
// app.get("/agents/:id")
route.post("/", createAgent)
// app.put("/agents/:id")
// app.delete("/agents/:id")


export default route