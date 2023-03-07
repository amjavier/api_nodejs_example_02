// Dev dependencies
const browserSync = require('browser-sync');

// Dependencies
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path'); // This package ships with Node.js
const port = process.env.PORT || 3200;
let dev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined; // dev is true on development environment and false in production environment
const morgan = require('morgan');
// Use morgan
app.use(morgan('dev'));





// Set public dir
app.use(express.static(path.join(__dirname,'./public')));
// Configure handlebars (view engine)
app.engine('.hbs', exphbs.engine({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');
// Routes dir
app.use(require('./app/routes'));

app.listen(port, listening);

if (dev) {
    console.log('The app is currently running in ' + 'development' + ' mode.');
} else {
    console.log('The app is currently running in ' + 'production' + ' mode.');
}

function listening() {
    if (dev) {
        // Setup browser-sync
        browserSync ({
            proxy: 'localhost:' + port,
            files: ['public/sass', 'views'],
            open: false // Do not open a new tab on browser after reloading    
        });
    } else {
        console.log('App is listening on port:', port);
    }
}