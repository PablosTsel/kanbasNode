import express from "express";
import "dotenv/config";
// import Lab5 from "./Lab5.js";
import CourseRoutes from "./Courses/routes.js";
import cors from "cors";
import session from "express-session";
import ModuleRoutes from "./Modules/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas-cs4550'
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));


app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
// Lab5(app);
app.listen(4000);


