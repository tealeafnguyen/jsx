var express = require('express')
var app = new express();
var path = require('path')
const bodyparser = require('body-parser')


app.set('views', path.join(__dirname, 'assets'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static(path.join(__dirname, 'assets')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


app.listen(process.env.PORT || 8080, ()=>console.log('http://localhost:8080'))

require("./assets/routes/htmlRoutes")(app);
require("./assets/routes/apiRoutes")(app);