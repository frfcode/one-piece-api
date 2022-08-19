import express from "express";
const routeTripulation = express.Router();

routeTripulation.get("/api/v1/tripulation=:nameTripulation", (req, res) => {
  let { nameTripulation } = req.params;
  res.send("search tripulation " + name);
});

routeTripulation.get(
  "/api/v1/tripulation=:nameTripulation&nakame=:nakamaName",
  (req, res) => {
    let { nameTripulation, nakamaName } = req.params;
    res.send(
      "search tripulation " + nameTripulation + " with the nakama " + nakamaName
    );
  }
);

export { routeTripulation };
