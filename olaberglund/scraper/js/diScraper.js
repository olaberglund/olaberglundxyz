const scraper = require('./scraper.js');
const cheerio = require('cheerio');
const URL = "https://www.di.se/ravaror";

const todaysNews = async () => {
  const html = await scraper.getRawData(URL);
  const $ = cheerio.load(html);
  const articles = $(".js_market-news-day.latest-news-day:contains('I dag') a");
  const hrefs = [];
  articles.each(function (i, elem) {
    hrefs[i] = URL + elem.attribs.href;
  });
  const message = hrefs.length ? hrefs : "Inga dagsfärska nyheter från DI ännu.";
  return message;
}

exports.todaysNews = todaysNews;
