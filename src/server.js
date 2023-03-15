import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

let app = express();

//  config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/public", express.static("public"));
// app.use(express.static("public"));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
// PORT === underfined => port = 6969

app.listen(port, () => {
  console.log("Backend NodeJs is Runing:" + port);
});
