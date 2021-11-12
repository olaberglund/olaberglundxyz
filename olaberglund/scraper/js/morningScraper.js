const http = require('http');
const tScraper = require('./telegramScraper');
const diScraper = require('./diScraper.js');
const fs = require('fs').promises;

async function scrape () {
    const telegram = tScraper.scrape();
    const di = diScraper.todaysNews();
    const indices = bloombergIndices();
    const res = await Promise.all([telegram, di, indices]);
    return res;
}

async function bloombergIndices() {
  const data = await fs.readFile('./indices.txt', 'utf8');
  return data;
}

const resolver =  (req, res) => {
  res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
  scrape().then(dataArr => {
    dataArr.map(data => {
      res.write("<pre>"+data+"</pre>");
    });
    res.end();
  });
}

http.createServer(resolver).listen(3000);