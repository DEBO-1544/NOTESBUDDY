import {Router} from "express"
import {NewUser} from "../CONTROLLER/newuser.controller.ts"
const router=  Router()

router.post("/",NewUser)
export  default router
