const cheerio = require('cheerio');
const URL = "https://www.bloomberg.com/markets/stocks/world-indexes/asia-pacific";
const scraper = require('./scraper.js');

async function getChange (name) {
  const html = await scraper.getRawData(URL);
  const $ = cheerio.load(html);
  const queryString = "tr:contains(" + name + ") span";
  const row = $(queryString);
  const change = row[2]?.children[0]?.data;
  return change;
}

async function getIndicies() {
  const nikkei = getChange('NIKKEI 225');
  const shanghai = getChange('SHANGHAI SE COMPOSITE');
  const hangseng = getChange('HANG SENG INDEX');
  const changes = await Promise.all([nikkei, shanghai, hangseng]);
  return changes;
}

getIndicies().then( (changes) => {
  console.log(changes)
});


