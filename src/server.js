const express = require("express")
const server = express()

const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .get("/", function (req, res) {
    res.render('index.html')
  })
  .get("/price-list", function (req, res) {
    res.render('price-list.html')
  })

  .listen(5500)