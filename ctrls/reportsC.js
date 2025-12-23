import { readFile, writeFile } from "../handel-file.js";

export const createReport = async (req, res) => {
    try {
        const dataReports = await readFile("data/reports.json")
        const dataAgents =  await readFile("data/agents.json")
        const newReport = {id: (Math.max(...dataReports.map(report => report.id), 0) + 1),
                            date: new Date().toISOString(),
                            content: req.body.content,
                            agentId: req.body.agentId
        }
        const foundID = dataAgents.find(agent => agent.id === newReport.agentId)
        console.log(foundID);
        
        if (foundID) {
            dataAgents[foundID.id -1].reportsCount +=1
            await writeFile("data/agents.json", dataAgents)
            dataReports.push(newReport)
            await writeFile("data/reports.json", dataReports)
            res.json(newReport)
        }
        return res.status(404)
    } catch (err) {
        console.error(err);
        
    }
}