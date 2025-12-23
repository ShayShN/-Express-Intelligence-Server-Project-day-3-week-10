import { readFile, writeFile } from "../handel-file.js";

const pathUsers = "data/users.json"
export const createUser = async (req, res) => {
    const {username,password} = req.body
  try {
      const dataUsers = await readFile(pathUsers)
      const newUser = {username, password}
      dataUsers.push(newUser)
      await writeFile(pathUsers, dataUsers)
      return res.json(newUser)
  } catch (err) {
        console.error(err);    
  }
}

export const getAllUsers = async (req, res) => {
    const data = await readFile(pathUsers)
    res.json(data)
}


export const updateUser = async (req, res) => {
    
}