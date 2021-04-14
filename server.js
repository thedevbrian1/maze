const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {res.render('index', {title: 'Home'})});
app.get('/about', (req, res) => {res.render('about', {title: 'About'})});
app.get('/contact', (req, res) => {res.render('contact', {title: 'Contact'})});
// app.get('/completed', (req, res) => {res.render('completed', {title: 'Portfolio'})});
app.get('/portfolio', (req, res) => {res.render('portfolio', {title: 'Portfolio'})});

app.listen(8080, () => {console.log('Server started at port ', 8080)});
