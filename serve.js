import express from "express";
const app = express();
const port = 60;
import { routeNakamas } from "./route/nakamas.js";
import { route } from "./route/default.js";
import { routeTripulation } from "./route/tripulation.js";
import path from "path";
import { fileURLToPath } from "url";

//LOAD RUTE HTML OR PUBLIC CONTENT
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

//MIDEWALRE
app.use(route);
app.use(routeNakamas);
app.use(routeTripulation);

//INIT SERVER
app.listen(port, "localhost", () => {
  console.log("SERVER RUNNING IN PORT " + port);
});
