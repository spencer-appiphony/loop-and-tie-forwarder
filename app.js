const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var request = require('request');
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', function(req, res) {
    res.send('Hello', 200);
})

app.post('/api', function (req, res) {
    var body = req.body;

    request.post(
        'https://rethinkdev-developer-edition.na59.force.com/services/apexrest/giftHook',
        {
            json: body
        },
        function(error, response, body) {

        }
    );

    res.send(200);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
});
