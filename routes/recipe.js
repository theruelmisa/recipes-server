const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Welcome to the Recipe Page');
    res.status(200).send('<h1>Recipes Here</h1>');
});

router.post('/', (req, res, next) => {
    console.log('Just added this recipe');
    res.status(201).redirect('/');
});

module.exports = router;