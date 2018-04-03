// server.js

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

app.get('/api/customers', (req,res) => {
    const customers=[
{id:1, firstName: 'john', lastName: 'Doe'},
{id:2, firstName: 'steve', lastName:'Smith'}
    ];
    res.json(customers);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
