import express from "express";
let routeNakamas = express.Router();
import { findNakama } from "../controller/nakamasController.js";

routeNakamas.get("/nakamas/name=:nakamaName", findNakama);

export { routeNakamas };
