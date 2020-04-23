//Node Entry Point File 

var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();


//GET , POST, PUT, DELETE
//(READ, CREATE, UPDATE, DELETE )

//importing handlebars into the app
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');



//load static resources
app.use(express.static("public"));


//home route
app.get('/', (req, res) => {

    

    res.render('home');

});



//Opening the server
const PORT = 3000;
app.listen(PORT , ()=>
{
        console.log(`Web application is up and running. `);
});