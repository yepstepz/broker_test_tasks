var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3306));

app.use('/', express.static(__dirname));
app.post('/', function (req, res) {
    res.send('Got a POST request')
})
app.post('/check.json', function (req, res) {
    res.send('Got a POST request')
})

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});