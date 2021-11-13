const scraper = require('./scraper.js');
const cheerio = require('cheerio');
const URL = "https://www.avanza.se/placera/forstasidan.html";
const baseURL = "https://www.avanza.se";

async function getArticle (href) {
  if(href === undefined){
    throw new Error();
  }
  const url = baseURL + href;
  const articleSite = await scraper.getRawData(url);
  const $ = cheerio.load(articleSite);
  const rubric = $("[itemprop='headline name']").text();
  const content = $(".parbase.rich-text.section.text p")
    .map(function (i, el) { return $(this); }).toArray().join('');
  return rubric + content;
}


async function rekHref (url) {
  const html = await scraper.getRawData(url);
  const $ = cheerio.load(html);
  const comArticle = $("a:contains('alla nya aktierekar')");
  const href = comArticle[0]?.attribs.href; 
  return href;
}

async function scrapeReks() {
  const table = await getArticle(await rekHref(URL))
    .catch(e => { return "\nIngen sammanställning av aktierekommendationerna ännu."; }); 
  return table;
}

async function scrape () {
    const reks = await scrapeReks();
    return reks;
}

exports.scrape = scrape;
