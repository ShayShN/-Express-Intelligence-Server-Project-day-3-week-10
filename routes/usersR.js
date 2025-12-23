import express from "express"
import { createUser, getAllUsers, updateUser } from "../ctrls/usersC.js";
import { validateUser } from "../middllware/validUser.js";

const route = express.Router()

route.post("/", validateUser, createUser)
route.get("/", validateUser, getAllUsers)
route.put("/:username", updateUser)

export default route
