module.exports = (req, res, next) => {
  res.header('Access-Control-allow-Origin', '*')
  res.header('Access-Control-allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  res.header('Access-Control-allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}