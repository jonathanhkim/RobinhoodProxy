const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const cors = require('cors')

app.use(cors())
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.static('http://localhost:3001/Public'))

app.get('/graph/*', (req, res) => {
  const url = `http://localhost:3001/graph/getStocks?q=${req.query.id}`
  res.redirect(url)
})

app.get('/tradestock/*', (req, res) => {
  const url = `http://localhost:3002/tradestock/${req.params[0]}`
  res.redirect(url)
})

app.get('/about/*', (req ,res) => {
  const url = `http://localhost:3003/about/${req.params[0]}`
  res.redirect(url)
})

app.get('/news/getData', (req ,res) => {
  const url = `http://localhost:3004/news/getData?id=${req.query.id}`
  res.redirect(url)
})

app.post('/news/addViews', (req, res) => {
  const url = `http://localhost:3004/news/addViews?id=${req.query.id}`
  res.redirect(url)
})

app.get('/ratings/*', (req, res) => {
  const url = `http://localhost:3005/ratings/${req.params[0]}`
  res.redirect(url)
})

app.get('/earnings/*', (req, res) => {
  const url = `http://localhost:3006/earnings/getData?id=${req.query.id}`
  res.redirect(url)
})
app.get('/')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
