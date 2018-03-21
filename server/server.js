/*
modules used expect, supertest
*/

const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res
    .status(404)
    .send({
      error: 'Page not found',
      name: 'toDo App v1.0'
    });
});

app.get('/users', (req, res) => {
  res.status(200)
      .send([
        {
          name: 'admin',
          age: 23
        },
        {
          name: 'user2',
          age: 24
        },
        {
          name: 'user3',
          age: 25
        }
      ]);
});

app.listen(3000);

module.exports = {
  app
};
