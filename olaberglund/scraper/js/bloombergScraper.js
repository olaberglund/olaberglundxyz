const axios = require('axios');
const cheerio = require('cheerio');
const URL = "https://www.bloomberg.com/markets/stocks/world-indexes/asia-pacific";

async function getRawData (url) {
  const {data} = await axios.get(URL, {
  headers: {
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': '1'
  }
  });
  return data;
};

async function getChange (name) {
  const html = await getRawData(URL);
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


