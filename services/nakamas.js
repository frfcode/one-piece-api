import { load } from "cheerio";
import fetch from "node-fetch";

async function searchNakama(name) {
  const response = await fetch(`https://onepiece.fandom.com/es/wiki/${name}`);
  const data = await response.text();
  return data;
}

const getNakamaData = async (name) => {
  let nakamaName = name
    .split("_")
    .map((element) => element.charAt(0).toUpperCase() + element.slice(1))
    .join("_");
  //console.log(nakamaName);
  async function preparaAllData() {
    let dataNakama = searchNakama(nakamaName).then((content) => {
      const $ = load(content);
      //GET BIOGRAPHY OF CHARACTER
      let contentBiography = $(".mw-parser-output p").text().trim();
      //GET NAME OF CHARACTER
      let titleBiography = $("h1.page-header__title").text().trim();
      //GET IMAGE OF CHARACTER
      let imageBiography = $(".wds-tab__content figure a img").attr("src");

      let getLastRecompense = 0;
      let getActuallyEdad = 0;
      let groupPirate = "";
      $("section.pi-group")
        .find("div.pi-item")
        .each((index, element) => {
          let getFeatures = $(element).attr("data-source");
          //GET PRICE  OF CHARACTER
          if (getFeatures == "recompensa") {
            let arrayRecompenses = $(element)
              .find(".pi-data-value")
              .text()
              .split(" ");
            getLastRecompense = arrayRecompenses[arrayRecompenses.length - 1];
          }
          //GET EDAD OF CHARACTER
          if (getFeatures == "edad") {
            let arrayEdad = $(element).find(".pi-data-value").text().split(" ");
            let searchActuallyEdad =
              arrayEdad[arrayEdad.length - 3] +
              " " +
              arrayEdad[arrayEdad.length - 2];
            getActuallyEdad = searchActuallyEdad.replaceAll("(debut)[3]", "");
          }
        });
      //GET GROUP PIRATA
      groupPirate = $("h2.pi-item div div.floatnone a").attr("title");

      let prepareObj = {
        name: titleBiography,
        edad: getActuallyEdad,
        recompense: getLastRecompense,
        biography: contentBiography,
        image: imageBiography,
        pirateGroup: groupPirate,
      };

      return JSON.stringify(prepareObj);
    });
    return await dataNakama;
  }

  return preparaAllData();
};

export { getNakamaData };
