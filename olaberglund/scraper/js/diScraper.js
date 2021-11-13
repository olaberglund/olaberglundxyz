const scraper = require('./scraper.js');
const cheerio = require('cheerio');
const URL = "https://www.di.se/ravaror";

async function getNews (date)  {
  const html = await scraper.getRawData(URL);
  const $ = cheerio.load(html);
  const jQueryString = ".js_market-news-day.latest-news-day:contains(" + date + ") a";
  const articles = $(jQueryString);
  const hrefs = [];
  articles.each(function (i, elem) {
    hrefs[i] = URL + elem.attribs.href;
  });
  const message = hrefs.length ? hrefs : "Inga dagsfärska nyheter från DI ännu.";
  return message;
}

//Scrape friday's news if weekend, otherwise today's
async function scrape() {
  const date = new Date();
  const today = date.getDay();
  var query = 'I dag';

  if(today === 6){
    query = 'I går';
  }else if(today === 0){
    query = date.getDay() - 2;
  }else if(today === 1){
    const sat = date.getDay() - 2;
    const sun = 'I går';
    const satNews = getNews(sat);
    const sunNews = getNews(sun);
    const news = await Promise.all([satNews, sunNews]);
    return news[0] + news[1];
  }

  const news = await getNews(query);
  return news;

}


exports.scrape = scrape;
