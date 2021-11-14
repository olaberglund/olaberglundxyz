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

async function scrape() {
  const date = new Date();
  const today = date.getDay();
  var query = 'I dag';

  switch (today){
    case 6: 
      query = 'I går';
      break;
    case 0:
      query = " " + date.getDate() - 2 + " ";
      break;
    case 1:
      const mon = 'I dag';
      const sat = " " + date.getDate() - 2 + " ";
      const sun = 'I går';
      const monNews = getNews(mon);
      const satNews = getNews(sat);
      const sunNews = getNews(sun);
      const news = await Promise.all([monNews, satNews, sunNews]);
      return news[0] + news[1] + news[2];
  }

  const news = await getNews(query);
  return news;
}

exports.scrape = scrape;
