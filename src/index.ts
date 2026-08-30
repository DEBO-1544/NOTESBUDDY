import express from "express";
import dotenv from "dotenv";
import cors from "cors";



dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin:["http://localhost:3000"],
        credentials:true
    }
))


import HealthcheckRoute from "./ROUTES/healthcheck.route.ts";
app.use("/api/v1/healthcheck", HealthcheckRoute); // server on checking

import Dout from "./ROUTES/dout.route.ts";
app.use("/api/v1/douts", Dout); // dout posting done under a note 
// onboarding
import Onboardig from "./ROUTES/onboarding.route.ts";
app.use("/api/v1/onboarding", Onboardig); //registering a new user info own db 
// onbaoriding status check 
import OnboardingCheck from "./ROUTES/onbaordingstatus.route.ts"
app.use("/api/v1/onboardingstatus",OnboardingCheck)
import Upload from "./ROUTES/upload.route.ts"

app.use("/api/v1/uploadnotes", Upload); // uploading a note by user done

// recomdation notes feed

import RecomdationFeed from "./ROUTES/recomdation.route.ts"
app.use("/api/v1/recomdedfeed",RecomdationFeed)

// serach bar 

import Serach from "./ROUTES/serachbar.route.ts"
app.use("/api/v1/serach",Serach)

// new user register
import UserRegistration  from "./ROUTES/Newuser.route.ts"
// profile fetch route
import Profile_info from "./ROUTES/profile.route.ts"
app.use("/api/v1/profile",Profile_info)
app.use("/api/v1/newuser",UserRegistration)



app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
});
