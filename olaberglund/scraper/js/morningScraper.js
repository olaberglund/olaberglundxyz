const http = require('http');
const tScraper = require('./telegramScraper');
const diScraper = require('./diScraper.js');
const fs = require('fs');

const resolver =  (req, res) => {
  res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
  scrape().then(message => {
      res.write("<pre>"+message+"</pre>");
      res.end();
  })
}

http.createServer(resolver).listen(3000);

function scrape (callback) {
    const telegram = tScraper.scrape();
    const di = diScraper.scrape();
    const indices = bloombergIndices();
    return  /*telegram + di + "\n" + */ indices;
}

async function bloombergIndices() {
  fs.readFile('indices.txt', 'utf8', function(err, data) {
    if (err) { return "Bloomberg avläsning: något gick fel"; }
    return data;
  });
}



function scrape (callback) {
  discrape
  tscrape
  bloomscrape
  if err => new err
  callback(null, telegram, di, indices);
