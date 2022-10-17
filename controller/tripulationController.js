const tripulationName = (req, res) => {
  let { nameTripulation, nakamaName } = req.params;
  res.send(
    JSON.stringify({
      message:
        "Nakama esta url no esta lista - Nakama, this url is not ready yet",
    })
  );
};

const tripulationNameByNakama = (req, res) => {
  let { nameTripulation } = req.params;
  res.send(
    JSON.stringify({
      message:
        "Nakama esta url no esta lista - Nakama, this url is not ready yet",
    })
  );
};

export { tripulationName, tripulationNameByNakama };
