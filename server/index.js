require('events').EventEmitter.prototype._maxListeners = 100;

const express = require('express')
const app = express()
const port = 3001

//Import the scraper
const scraper=require('./scraper');

//Middlewear that allows us to connect to the website
//and disables security rules for local development
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
});

/**
 * GET route 
 * Calls the scraper function scrape
 * returns a string array
 */
app.get('/titles', async(req,res) => {
    const data=await scraper.scrape();
    res.send(data);
})


//Default wrapper function for HTTP.createServer
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
}) 