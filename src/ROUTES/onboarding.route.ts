import {Router} from "express";
import { Onboarding } from "../CONTROLLER/onboarding.controller.ts";

const router = Router();
router.put("/",Onboarding)
export default router;