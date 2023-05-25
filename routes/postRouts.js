const express = require('express');
const post_route = express();

const bodyParser = require('body-parser')
post_route.use(bodyParser.json())
post_route.use(bodyParser.urlencoded({ extended: false }))

// multer setup
const multer = require('multer');
const path = require('path');

post_route.use(express.static('public'));

const stroage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/postimage'), function (error, success) {
            if (error) {
                console.log(error)
            }
        })
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, function (error, success) {
            if (error) {
                console.log(error)
            }
        })
    }
});

const uplod = multer({ storage: stroage });

const postcoltrollers = require('../controllers/postControllers')

post_route.post('/create-post', uplod.single('image'), postcoltrollers.postcontrollers);

post_route.get('/get-post', postcoltrollers.getControler);

post_route.get('/delet-post/:id', postcoltrollers.deletPost);

post_route.post('/upded-post',uplod.single('image'), postcoltrollers.updedpost);







module.exports = post_route;
