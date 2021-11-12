const axios = require('axios');
const cheerio = require('cheerio');
const URL = "https://www.di.se/ravaror";


async function getRawData ( url ) {
  const { data } = await axios.get(url);
  return data;
};

const todaysNews = async () => {
  const html = await getRawData(URL);
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







//async function getRawData (url) {
//  const { data } = await axios.get(url);
//  return data;
//};
//
//async function todaysNews () {
//  const html = await getRawData(URL);
//  const $ = cheerio.load(html);
//  const articles = $(".js_market-news-day.latest-news-day:contains('I dag') a");
//  const hrefs = [];
//  articles.each(function (i, elem) {
//    hrefs[i] = URL + elem.attribs.href;
//  });
//  return hrefs;
//}
//
//exports.scrape = async function () {
//  const links = await todaysNews();
//  const message = links.length ? links : "Inga dagsfärska nyheter från DI ännu.";
//  return message;
//}
