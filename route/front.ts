import express from "express";
const routeFront = express.Router();

routeFront.get("/", (__req, res: any) => {
  res.render("index.html", {title: 'Nakamas One Piece API'});
});

routeFront.get("*", (__req, res:any) => {
  res.render("404.html", {title: 'Nakamas One Piece API'});
});

export { routeFront };
