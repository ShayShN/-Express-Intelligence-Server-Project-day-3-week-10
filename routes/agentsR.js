import express from "express"
import { createAgent, getAllAgent, getAgentByID } from "../ctrls/agentsC.js"


const route = express.Router()

route.get("/", getAllAgent)
route.get("/:id", getAgentByID)
route.post("/", createAgent)
// app.put("/agents/:id")
// app.delete("/agents/:id")


export default route