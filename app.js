const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res) {
    var body = req.body;

    request.post(
        'https://rethinkdev-developer-edition.na59.force.com/services/apexrest/giftHook',
        {
            json: body
        },
        function(error, response, body) {

        }
    );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
