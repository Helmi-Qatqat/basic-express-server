'use strict'

function validator(req,res,next) {
  const name = req.query.name
  if(name === '' || undefined) {
    res.send(error)
  }
  next();
}

module.exports = validator