const express = require("express")
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")
const routes = require("./routes")

const port = 4000

const app = express()

// Initialize the view engine
app.engine("handlebars", handlebars())
// Tell Express to use this view engine
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('styles'))

// Routes
app.use(routes)

app.listen(port, () => console.log("Server running"))
