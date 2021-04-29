const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./geocode')
const forecast = require('./forecast')
const { response } = require('express')
const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
console.log(partialsPath)
// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Akshat'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Akshat'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Akshat'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address)
    {
        return res.render('404', {
            title: '404',
            name: 'Akshat',
            errorMessage: 'Give an address sucker'
        })
        
    }
    else if(req.query.address && req.query.address!="")
    {
        
            ad=req.query.address
            geocode(ad,(error,{latitude,longitude,location})=>{
                if(error){res.send("Fuckkk")}
                else{
                forecast(latitude,longitude,(error,response)=>{
                    if(error)
                    {
                        return res.send("SLUT")
                    }
                    return res.send(response)
                })
            }
                })
        
    }
    else{
        {
            return res.render('404', {
                title: '404',
                name: 'Akshat',
                errorMessage: 'Give atleast an address sucker'
            })
            
        }
    }
    
})

app.get('/products',(req,res)=>{
    if((req.query==0)){
        return res.send("You piece of shit")
    }
    if(!req.query.ass){
        return res.send('<h1>Must give an ass!!!</h1>')
    }
    res.send({
        products:[]
    })
})
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Akshat',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Akshat',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})