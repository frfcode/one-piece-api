import express from "express";
const app = express();
const port = process.env.PORT || 60;
import {routeFront} from './route/front'
import { routeNakamas } from "./route/nakamas";
import { routeTripulation } from "./route/tripulation";
import path from "path";

app.use(express.json());

//BACKEND
app.use("/api/v1", routeNakamas);
app.use("/api/v1", routeTripulation);

//FRONTEND
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs'); 
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, "/public")));
app.use(routeFront);

//INIT SERVER
app.listen(port, () => {
  console.log("SERVER RUNNING IN PORT " + port);
});
