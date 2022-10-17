import express from "express";
const routeFront = express.Router();

routeFront.get("/", (req, res) => {
  res.send("hello world");
});

routeFront.get("*", (req, res) => {
  res.send("404");
});

export { routeFront };
