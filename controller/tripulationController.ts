const tripulationName = (req: any, res: any) => {
  let { nameTripulation, nakamaName } = req.params;
  console.log(nameTripulation + ' ' + nakamaName)
  res.send(
    JSON.stringify({
      message:
        "Nakama esta url no esta lista - Nakama, this url is not ready yet",
    })
  );
};

const tripulationNameByNakama = (req: any, res: any) => {
  let { nameTripulation } = req.params;
  console.log(nameTripulation)
  res.send(
    JSON.stringify({
      message:
        "Nakama esta url no esta lista - Nakama, this url is not ready yet",
    })
  );
};

export { tripulationName, tripulationNameByNakama };
