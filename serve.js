import express from "express";
const app = express();
const port = 60;
import { routeNakamas } from "./route/nakamas.js";
import { routeFront } from "./route/front.js";
import { routeTripulation } from "./route/tripulation.js";
import path from "path";
import { fileURLToPath } from "url";

app.use(express.json());

//BACKEND
app.use("/api/v1", routeNakamas);
app.use("/api/v1", routeTripulation);

//FRONTEND
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));
app.use("/", routeFront);

//INIT SERVER
app.listen(port, "localhost", () => {
  console.log("SERVER RUNNING IN PORT " + port);
});
