const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('HELLO);
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});

