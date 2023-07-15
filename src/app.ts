import express, { urlencoded } from "express";
import { mongoDbConnection } from "./config/mongo.config";
import { routes } from "./routes/index.routes";

const app = express();
mongoDbConnection();
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(express.static("public"))

app.use("/api", routes);



app.listen(8080, () => {
  console.log("Connected on port 8080");
})