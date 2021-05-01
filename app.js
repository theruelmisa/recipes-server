const express = require('express');
const app = express();

const recipeRoutes = require('./routes/recipe');

app.use('/recipes', recipeRoutes);


const port = 5000;
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});