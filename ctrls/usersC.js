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
  try {
      const data = await readFile(pathUsers)
      const newPassword = req.body.password
      const foundName = data.findIndex(user => user.username === req.params.username)
      if (foundName === -1) {
          return res.status(403).json("not found name")
      }
      data[foundName].password = newPassword
      await writeFile(pathUsers, data)
      res.json(data[foundName])
  } catch (err) {
    console.error(err);
    
  }
}