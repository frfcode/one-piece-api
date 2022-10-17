import { getNakamaData } from "../services/nakamas.js";

const findNakama = (req, res) => {
  let { nakamaName } = req.params;
  let getDataNakama = getNakamaData(nakamaName);
  getDataNakama
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((e) => console.log(e));
};

export { findNakama };
