import express from "express";
// import Lab5 from "./Lab5.js";
import CourseRoutes from "./Courses/routes.js";
import cors from "cors";
import session from "express-session";
import ModuleRoutes from "./Modules/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
mongoose.connect("mongodb://localhost:27017/kanbas-cs4550");
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
 );
 
  app.use(express.json()
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(
  session(sessionOptions)
);

app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
// Lab5(app);
app.listen(4000);
