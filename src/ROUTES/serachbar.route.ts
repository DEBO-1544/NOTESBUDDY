import {Router} from "express"
import { SerachBar} from "../CONTROLLER/serach.controller.ts"
const route=Router()

route.get("/",SerachBar)
export default route 