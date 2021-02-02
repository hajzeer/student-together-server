
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();


    mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
        .catch((error) => console.error(error))

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection successfully')
})

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.send('student together backend');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});