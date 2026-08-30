import { Router } from "express";
import {CheckOnboarding} from "../CONTROLLER/checkonbaording.controller.ts"
const router= Router()
router.post("/",CheckOnboarding)
export default router
