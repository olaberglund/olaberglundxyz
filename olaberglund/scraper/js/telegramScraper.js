const axios = require('axios');
const cheerio = require('cheerio');
const URL = "https://www.avanza.se/placera/telegram.20.plc.html";
const baseURL = "https://www.avanza.se";

async function getRawData (url) {
  const { data } = await axios.get(url);
  return data;
};

async function getArticle (href) {
  if(href === undefined){
    throw new Error();
  }
  const url = baseURL + href;
  const articleSite = await getRawData(url);
  const $ = cheerio.load(articleSite);
  return $('.feedArticle').text();
}

async function commodityHref (url) {
  const html = await getRawData(url);
  const $ = cheerio.load(html);
  const comArticle = $("a:has(span:contains('RÅVAROR:')):first");
  const href = comArticle[0]?.attribs.href; 
  return href;
}

async function scrapeCommodity () {
  const table = await getArticle(await commodityHref(URL))
    .catch(e => { return "Ingen råvaruartikel för idag ännu."; }); 
  return table;
}

async function macroHref (url, n) {
  const html = await getRawData(url);
  const $ = cheerio.load(html);
  const days = ['SÖ', 'MÅ', 'TI', 'ON', 'TO', 'FR', 'LÖ']
  const jQueryString = "a:contains('DETTA HÄNDER " + days[(new Date().getDay() + n) % 7] + "')";
  const macroArticle = $(jQueryString);
  const href = macroArticle[0]?.attribs.href; 
  return href;
}

async function scrapeMacro() {
  const todaysMacro = await getArticle(await macroHref(URL, 0))
    .catch(e => { return "Ingen makroartikel för idag ännu."; }); 
  const tomorrowsMacro = await getArticle(await macroHref(URL, 1))
    .catch(e => { return "Ingen makroartikel för imorgon ännu."; }); 
  return todaysMacro + tomorrowsMacro;
}

exports.scrape = async function () {
    const macro = await scrapeMacro();
    const commodity = await scrapeCommodity();
    return macro + commodity;
}
