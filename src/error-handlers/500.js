function internal(err,req,res,next) {
  res.status(500).send({
    status: 500,
    route: req.path,
    message: `Server Internal Error, ${err.message}`,
  })
}

module.exports = internal