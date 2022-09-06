const router = require('express').Router();

const {
    getHome
} = require('../controllers/home.controllers');

router.get('/home', getHome)

module.exports = router