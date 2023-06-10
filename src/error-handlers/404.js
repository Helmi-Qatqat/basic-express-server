function notFound(req,res) {
  res.status(404).send({
    status: 404,
    route: req.path,
    message: `Page not found`,
  })
}

module.exports = notFound