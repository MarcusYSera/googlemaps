const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test'){
  mongoose.connect('mongodb://localhost/googlemaps');
}

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET, POST",
  optionsSuccessStatus: 200
}))

// middlewares order matters
app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
  // status code 422 is a good status code for validation errors
  res.status(422).send({ error: err.message });
});

module.exports = app;
