
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const exphbs = require("express-handlebars")
const session = require("express-session")
const flash = require("connect-flash")
const rotas = require("./src/routes/routes")
const mongoose = require('mongoose')
const Middlewares= require('./src/Midllewares/middlewares')
const app = express()
const porta = 5500
const middlewares = new Middlewares()

app.use(session({
    secret: "crud",
    resave: true,
    saveUninitialized: true
}))

mongoose.connect('mongodb://localhost/pet')

app.use(express.json())

app.use(flash())
app.use(middlewares.middlewaresGlobal)


app.use(express.urlencoded({
    extended: true                            
}))

app.use(express.static(path.resolve(__dirname,'public')))  // carrega arquivo estatico Img e css 

app.set("views",path.resolve(__dirname,'src','views'))
app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine','handlebars')   // carrega pagina handlebars 

app.use(rotas)

app.listen(porta, ()=>{
    console.log(`http://localhost:${porta}/`)
    console.log(`servidor rodando na porta ${porta}`)
})