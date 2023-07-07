import express, { urlencoded } from "express";
import { mongoDbConnection } from "./config/mongo.config";

const app = express();
mongoDbConnection();
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(express.static("public"))



app.listen(8080, () => { 
  console.log("Connected on port 8080");
 })