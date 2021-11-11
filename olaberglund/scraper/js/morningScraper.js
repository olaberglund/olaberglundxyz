const http = require('http');
const tScraper = require('./telegramScraper');
const diScraper = require('./diScraper.js')
const scrapers = [tScraper, diScraper];

const resolver =  (req, res) => {
  res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
  scrape().then(message => {
      res.write("<pre>"+message+"</pre>");
      res.end();
  })
}

http.createServer(resolver).listen(3000);

async function scrape () {
    const telegram = await tScraper.scrape();
    const di = await diScraper.scrape();
    return telegram + di;
}
