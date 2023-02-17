import express from "express";
const routeFront = express.Router();

routeFront.get("/", (__req, res: any) => {
  res.send("hello world");
});

routeFront.get("*", (__req, res:any) => {
  res.send("404");
});

export { routeFront };
