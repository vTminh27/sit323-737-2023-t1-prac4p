const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Calculator microservice is running');
});


app.get('/add/:num1/:num2/', (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input parameters');
  } else {
    const result = num1 + num2;
    res.send(`${result}`);
  }
});

app.get('/subtract/:num1/:num2/', (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input parameters');
  } else {
    const result = num1 - num2;
    res.send(`${result}`);
  }
});

app.get('/multiply/:num1/:num2/', (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input parameters');
  } else {
    const result = num1 * num2;
    res.send(`${result}`);
  }
});

app.get('/divide/:num1/:num2/', (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input parameters');
  } else if (num2 === 0) {
    res.status(400).send('Cannot divide by zero');
  } else {
    const result = num1 / num2;
    res.send(`${result}`);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

app.listen(3000, () => console.log('Calculator microservice running on port 3000'));
