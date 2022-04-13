const { MongoCliient } = require('mongodb');
const express = require('express');
const app = express();

const PORT = precess.env.PORT || 3000;

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {name: 'Peter'});
});

const searchRouter = require('./routes/awards');

app.use('/search', searchRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

