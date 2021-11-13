const scraper = require('./scraper.js');
const cheerio = require('cheerio');
const URL = "https://www.avanza.se/placera/telegram.20.plc.html";
const baseURL = "https://www.avanza.se";

async function getArticle (href) {
  if(href === undefined){
    throw new Error();
  }
  const url = baseURL + href;
  const articleSite = await scraper.getRawData(url);
  const $ = cheerio.load(articleSite);
  return $('.feedArticle').text();
}

async function commodityHref (url) {
  const html = await scraper.getRawData(url);
  const $ = cheerio.load(html);
  const comArticle = $("a:has(span:contains('RÅVAROR:')):first");
  const href = comArticle[0]?.attribs.href; 
  return href;
}

async function scrapeCommodity () {
  const table = await getArticle(await commodityHref(URL))
    .catch(e => { return "\nIngen råvaruartikel för idag ännu."; }); 
  return table;
}

async function macroHref (url, n) {
  const html = await scraper.getRawData(url);
  const $ = cheerio.load(html);
  const days = ['SÖ', 'MÅ', 'TI', 'ON', 'TO', 'FR', 'LÖ']
  const day = (function () {
    const reqDay = new Date().getDay() + n;
    const isWeekend = (reqDay % 7) % 6 === 0; // %7 to get a day of the week and %6 to check if sat(index 6) or sun(index 0).
    return isWeekend ? 1 : reqDay;
  })();
  const jQueryString = "a:contains('DETTA HÄNDER " + days[day % 7] + "')";
  const macroArticle = $(jQueryString);
  const href = macroArticle[0]?.attribs.href; 
  return href;
}

async function scrapeMacro() {
  const todaysMacro = getArticle(await macroHref(URL, 0))
    .catch(e => { return "\nIngen makroartikel för idag ännu."; }); 
  const tomorrowsMacro = getArticle(await macroHref(URL, 1))
    .catch(e => { return "\nIngen makroartikel för imorgon ännu."; }); 
  const sumMacro = await Promise.all([todaysMacro, tomorrowsMacro]);
  return sumMacro[0] + sumMacro[1];
}

exports.scrape = async function () {
    const macro = scrapeMacro();
    const commodity = scrapeCommodity();
    const news = await Promise.all([macro, commodity]);
    return news[0] + news[1];
}
