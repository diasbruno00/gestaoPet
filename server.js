
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

/*
const MongoStore = require('connect-mongo')(session)

const sessionOptions = session({
    secret:'crud',
    store: new MongoStore ({mongooseConnection: mongoose.connection}),
    resave:false,
    saveUninitialized: false,
    cookie:{
        maxAge:1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions)
*/

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
    console.log(`http://localhost:${porta}/criar`)
    console.log(`servidor rodando na porta ${porta}`)
})