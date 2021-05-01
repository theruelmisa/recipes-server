const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // Get all recipes from database
    res.status(200).send('<h1>Recipes Here</h1>');
});

router.post('/', (req, res, next) => {
    console.log('Just added this recipe');
    // Get data from body and add it to the data base before redirecting to /recipes
    res.status(201).redirect('/');
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    // Find recipe with id and display
    res.status(200).send(`<h1>This is recipe with ${id} </h1>`);
});

router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    // Find recipe with id
    // Do something with body from form and add it to data (most likely map method)
    console.log('Editing this recipe. Do something with body here');
    res.status(204).send(`<h1>Recipe ${id} has been updated successfully!</h1>`)
});

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    // Filter recipe from data - most likely filter method
    // Return that new array or redirect
    res.status(200).redirect('/');
});

module.exports = router;