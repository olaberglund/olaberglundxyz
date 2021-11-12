const axios = require('axios');
const cheerio = require('cheerio');
const URL = "https://www.bloomberg.com/markets/stocks/world-indexes/asia-pacific";

async function getRawData (url) {
  const {data} = await axios.get(URL, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
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

async function scrape() {
  const nikkei = "Nikkei 225: " + await getChange('NIKKEI 225');
  const shanghai = "\nShanghai composite: " + await getChange('SHANGHAI SE COMPOSITE');
  const hangseng = "\nHang Seng index: " + await getChange('HANG SENG INDEX');
  return nikkei + shanghai + hangseng;
 
}

scrape().then(res => { console.log(res); });
