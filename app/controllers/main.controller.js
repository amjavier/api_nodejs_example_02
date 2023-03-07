// Import packages
module.exports = {
    home: home,
    apiPrecip: apiPrecip,
    apiStations: apiStations,
    apiTobs: apiTobs,
    apiStartTemp: apiStartTemp,
    apiStartEndTemp: apiStartEndTemp
}

// Import dependencies
const date = require('date-and-time');

// DB instance
const db = require('better-sqlite3')('./database/hawaii.sqlite');

// Import MathJS for calculations
const { create, all } = require('mathjs')
const math = create(all)

// Routes functions
function home (req, res) {
    res.render(`./home`);
}

function apiPrecip (req, res) {
    // Subtract 1 year for date 2017-08-23
    const date1 = new Date(2017, 8, 23);
    let prev_year = date.addYears(date1, -1.1);
    prev_year = date.format(prev_year, 'YYYY-MM-DD');
    // console.log(prev_year)
    // Query measurement table
    // Filter date: Select all records newer than or equal to prev_year of 2017-08-23 for station USC00519397
    let precipitation = db.prepare('SELECT date, prcp FROM measurement WHERE station = ? AND date >= ?').all('USC00519397', prev_year)
    // Create empty object literal
    let precipitationArr = {};
    for(let key in precipitation) {
        // Push key:value pairs
        precipitationArr[precipitation[key].date] = precipitation[key].prcp;
    }
    // console.log(precipitationArr)
    // Return JSON
    res.json(precipitationArr)
}

function apiStations (req, res) {
    // Query all weather stations from station table
    results = db.prepare('SELECT station FROM station').all()
    // Iterate station table and create array of station ID's
    let stations = [];
    for(let key in results) {
        // Push array ID's into stations empty array
        stations.push(results[key].station);
        // console.log(precipitationArr)
    }
    // console.log(stations)
    // Return a JSON with 'stations' (key) and station ID array (values)
    res.json({stations})
}

function apiTobs (req, res) {
    // Subtract 1 year for date 2017-08-23
    const date1 = new Date(2017, 8, 23);
    let prev_year = date.addYears(date1, -1.1);
    prev_year = date.format(prev_year, 'YYYY-MM-DD');
    // console.log(prev_year)
    // Query measurement table
    // Filter date: Select all records newer than or equal to prev_year of 2017-08-23 for station USC00519281
    let temperature = db.prepare('SELECT date, tobs FROM measurement WHERE station = ? AND date >= ?').all('USC00519281', prev_year)
    // Create empty object literal
    let temps = [];
    for(let key in temperature) {
        // Push array ID's into temps empty array
        temps.push(temperature[key].tobs);
    }
    // console.log(temps)
    // Return JSON
    res.json({temps})
}

function apiStartTemp (req, res) {
    // Get year from user entered date parameter
    let start_year = req.params.start
    console.log(start_year)
    // Query measurement table
    // Filter date: Select all records newer than or equal to entered start date
    let temperature = db.prepare('SELECT date, tobs FROM measurement WHERE date >= ?').all(start_year)
    // Create empty object literal
    let temps = [];
    for(let key in temperature) {
        // Push array ID's into temps empty array
        temps.push(temperature[key].tobs);
    }
    // Calculations for minimum, maximum, and average
    let minTemp = math.max(temps)
    let maxTemp = math.min(temps)
    let avgTemp = math.mean(temps)
    // console.log(temps)
    // Return JSON
    res.json({minTemp, maxTemp, avgTemp})
}

function apiStartEndTemp (req, res) {
    // Get year from user entered date parameter
    let start_year = req.params.start
    let end_year = req.params.end
    console.log(start_year)
    // Query measurement table
    // Filter date: Select all records newer than or equal to entered start date
    let temperature = db.prepare('SELECT date, tobs FROM measurement WHERE date >= ? AND date <= ?').all(start_year, end_year)
    // Create empty object literal
    let temps = [];
    for(let key in temperature) {
        // Push array ID's into temps empty array
        temps.push(temperature[key].tobs);
    }
    // Calculations for minimum, maximum, and average
    let minTemp = math.min(temps)
    let maxTemp = math.max(temps)
    let avgTemp = math.mean(temps)
    // console.log(temps)
    // Return JSON
    res.json({minTemp, avgTemp, maxTemp})
}