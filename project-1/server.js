//runs server// conects FE --> database
// SERVER-SIDE JAVASCRIPT



//require express in our app

var express = require('express'),
    database = require('./models'),
    app = express();

    // serve static files from public folder
    app.use(express.static(__dirname + '/public'));

/**********
 * ROUTES *
 **********/

 /*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */


//app.get('/api/');

//app.post('/api/');
app.get('/api/sanity', function sanity(req, res) {
  
});

/**********
 * SERVER *
**********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
