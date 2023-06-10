'use strict';
const notFound = require('./error-handlers/404')
const internal = require('./error-handlers/500')
const validator = require('./middlewares/validator')
const logger = require('./middlewares/logger')
const express = require('express');
const server = express();

server.use(logger)


server.get('/', (req,res) => {
  res.send(`Hello`)
}) 


server.get('/userdata', (req,res) => {
  res.json({
    id: 1,
    name: 'Helmi',
    email: 'Helmi@ltuc.edu',
    time: res.timestamp,
  })
})
server.get('/test500', (req,res) => {
  console.loog(`test`)
})

server.use(validator)
server.get('/person', (req,res) => {
  const name = req.query.name
  res.send({ name: name })
})

server.use('*', notFound)
server.use(internal)

function start(port) {
  server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
  })
}

module.exports = {
  start: start,
  server: server,
}
