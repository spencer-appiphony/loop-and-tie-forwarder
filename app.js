const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var request = require('request');
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api', function(req, res) {
    res.send('Hello', 200);
})

app.post('/api/rethinkdev-developer-edition.na59.force.com/services/apexrest/giftHook', function (req, res) {
    // var url = 'https://rethinkdev-developer-edition.na59.force.com/services/apexrest/giftHook';
    var url = 'https://spencer-resttest-developer-edition.na73.force.com/services/apexrest/api';
    var body = req.body;

    console.log('headers');
    console.log(req.headers);
    console.log('body');
    console.log(req.body);
    console.log('params');
    console.log(req.params);
    console.log('query');
    console.log(req.query);

    // request.post(
    //     url,
    //     {
    //         form: body
    //     },
    //     function(error, response, body) {
    //
    //     }
    // );

    res.redirect(307, url);

    // res.writ(200);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
});
