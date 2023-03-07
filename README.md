# Node.js/Express API Example

Live app: <a href="https://api-nodejs-example-02.herokuapp.com/" target="_blank">https://api-nodejs-example-02.herokuapp.herokuapp.com/</a>

<img src="./img/api_001.PNG " width="450">

### Summary
This repository contains a basic REST API I built with Node.js and Express. I decided to create this REST API since I previously built <a href="https://api-nodejs-example-02.herokuapp.com/" target="_blank">the same API with Python and Flask</a> and wanted to show that it's possible to accomplish the same with Node.js and Express. Additionally, I used MathJS for the math calculations and the better-sqlite3 library to query the SQLite database. A more sophisticated tool like the Sequelize ORM could have been used with the SQLite database as well but for this basic example I didn't need it.
<br>
For this exercise I used a SQLite but Node.js/Express can be used with many other databases, including PostgreSQL and MS SQL Server with the appropriate ORM (e.g., Sequelize). The API principle is the same with any database, the GET request will return a response, on this case in JSON format (e.g., XML is another format). There are of course other HTTP methods like POST, PUT, and DELETE but those are not part of this example.
<br>
The database contains 2 weather station tables: measurement (measured precipitation and temperature per weather station) and station (weather station info). The dataset contains between 2010 and 2017. The purpose of this basic app is to show that Python, in addition to being used for data science and analysis, can also be used to build robust back-end web applications.
<br>
<br>
The 3 available GET routes are listed below:
1. <b>/api/v1.0/precipitation</b> => precipitation (Inch)
   * <img src="./img/precipitation_002.PNG" width="700">
2. <b>/api/v1.0/stations</b> => weather station info
   * <img src="./img/stations_003.PNG" width="500">
3. <b>/api/v1.0/tobs</b> => temperature (Fahrenheit)
   * <img src="./img/temp_004.PNG" width="700">
4. <b>/api/v1.0/temp/[start]</b> or <b>/api/v1.0/temp/[start]/[end]</b> => start and end are date placeholders, e.g., .../temp/2017-06-01/2017-06-30
   * <img src="./img/temp_005.PNG" width="700">
   * <img src="./img/temp_006.PNG" width="700">
