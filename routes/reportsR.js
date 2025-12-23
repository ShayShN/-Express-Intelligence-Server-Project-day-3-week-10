import express from "express"
import { createReport } from "../ctrls/reportsC.js";

const route = express.Router()

route.use("/", createReport)

export default route
