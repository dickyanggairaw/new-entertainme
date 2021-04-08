function errorHandler(err, req, res, next) {
  res.status(400).json({message: err.errors[0].message})
}

module.exports = errorHandler