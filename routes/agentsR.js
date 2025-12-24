import express from "express"
import { createAgent, getAllAgent, getAgentByID, updateAgent } from "../ctrls/agentsC.js"


const route = express.Router()

route.get("/", getAllAgent)
route.get("/:id", getAgentByID)
route.post("/", createAgent)
route.put("/:id", updateAgent)
// app.delete("/agents/:id")


export default route