const express = require('express');
const hbs = require('hbs')
var app = express();
const fs = require('fs');
const port = process.env.PORT || 8080;
hbs.registerPartials(__dirname + '/views/partial');

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

//app.use((request, response, next)=>{
    //var time = new Date().toString();
    //console.log(`${time}: ${request.method} ${request.url}`);
    //var log = `${time}: ${request.method} ${request.url}`;
    //fs.appendFile('server.log', log + '\n', (error) => {
        //if (error) {
           // console.log('Unable to log message');
       // }
    //});
    //response.render('maintence.hbs')
    //next();
//});






app.get('/', (request, response) => {
    //response.send('<h1>Hello Express!<h1>');
    response.send({
        name: 'Your Name',
        school:[
            'BCIT',
            'SFU',
            'UBC'
        ]
    })
});

app.get('/info', (request, response)=>{
    response.render('about.hbs', {
        title: 'About page',
        year: new Date().getFullYear(),
        header: 'About Me'


    })
});

app.get('/info', (request, response)=>{
    response.render('about.hbs', {
        title: 'About page',
        year: new Date().getFullYear(),
        header: 'About Me'

    })
});

app.get('/404', (request, response) => {
    response.send({
        error: 'Page not found'
    })

});

app.get('/main',(request, response)=> {
    response.render('main.hbs', {
        title: 'Main Page',
        year: new Date().getFullYear(),
        header: 'Main Page',
    })
});

app.get('/currency', (request, response) => {
    response.render('currency.hbs', {
        title: 'Currency',
        year: new Date().getFullYear(),
        header: 'Currency',
    })
});




app.listen(port,()=>{
    console.log('Server is up on the port 8000');
});

