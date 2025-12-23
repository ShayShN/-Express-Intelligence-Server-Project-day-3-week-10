import express from "express"
import { createUser, getAllUsers } from "../ctrls/usersC.js";
import { validateUser } from "../middllware/validUser.js";

const route = express.Router()

route.post("/", validateUser, createUser)
route.get("/", validateUser, getAllUsers)


export default route
