const express = require('express');
const bodyParser = require('body-parser');
const { Car } = require('./models'); // models

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/cars', (req, res) => {
  Car.findAll().then((cars) => {
    res.send(cars);
  });
});

app.get('/cars/:id', (req, res) => {
  Car.findByPk(req.params.id).then((car) => {
    res.send(car);
  });
});

app.delete('/cars/:id', (req, res) => {
  Car.destroy({
    where: {
      id: req.params.id,
    },
  }).then((queryResponse) => {
    if (queryResponse === 0) {
      res.send('Nothing to delete');
    } else {
      res.send('DELETED');
    }
  });
});

app.post('/yeni-araba', (req, res) => {
  Car.create(req.body).then((createdCar) => {
    res.send(createdCar);
  });
});

app.use(express.json);

module.exports = app;
