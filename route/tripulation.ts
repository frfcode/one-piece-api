import express from "express";
const routeTripulation = express.Router();
import {
  tripulationName,
  tripulationNameByNakama,
} from "../controller/tripulationController";

routeTripulation.get("/tripulation/name=:tripulation", tripulationName);

routeTripulation.get(
  "/tripulation/name=:nameTripulation&nakamaName=:nameKama",
  tripulationNameByNakama
);

export { routeTripulation };
