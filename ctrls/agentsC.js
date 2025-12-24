import { readFile, writeFile } from "../handel-file.js";

const pathAgent = "data/agents.json"

export const createAgent = async (req, res) => {
    try {
        const data = await readFile(pathAgent)
        const newagent = {
            id: (Math.max(...data.map(agent => agent.id), 0) + 1),
            name: req.body.name,
            nickname: req.body.nickname,
            reportsCount: 0
        }
        data.push(newagent)
        await writeFile(pathAgent, data)
        res.json(newagent)
    } catch (err) {
        console.error(err); 
    }
}

export const getAllAgent = async (req, res) => {
    try {
        const data = await readFile(pathAgent)
        res.json(data)
    } catch (err) {
        console.error(err);
        
    }
}
export const getAgentByID = async (req, res) => {
   try {
     const dataAgents = await readFile(pathAgent)
     const foundID = dataAgents.find(agent => agent.id === Number(req.params.id))
     console.log(foundID);
     
     if (!foundID) {
         return res.status(404).json("ID not found")
     } else {
         res.json(foundID)
     } 
   } catch (err) {
        console.error(err); 
   }
}
export const updateAgent = async (req, res) => {
    const dataAgents = await readFile(pathAgent)
    const foundID = dataAgents.findIndex(agent => agent.id === Number(req.params.id))
    if (foundID === -1) {
        return res.status(404).json("id not found")
    } else {
        dataAgents[foundID]
    }
}