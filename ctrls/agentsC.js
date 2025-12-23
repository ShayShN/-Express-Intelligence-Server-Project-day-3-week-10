import { readFile, writeFile } from "../handel-file.js";

export const createAgent = async (req, res) => {
    
    const data = await readFile("data/agents.json")
    const newagent = {id: (Math.max(...data.map(agent => agent.id), 0) + 1),
                    name: req.body.name,
                    nickname: req.body.nickname,
                    reportsCount: 0
    }
    data.push(newagent)
    await writeFile("data/agents.json", data)
    res.json(newagent)
}
