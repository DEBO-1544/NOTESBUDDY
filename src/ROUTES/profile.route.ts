import {Router} from "express"
import Profile from "../CONTROLLER/profile.controller.ts"
const router = Router()

router.get("/",Profile)

export default router