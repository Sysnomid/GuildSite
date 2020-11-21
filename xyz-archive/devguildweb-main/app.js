const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = express.Router();
const app = express();
const SitemapGenerator = require('sitemap-generator');


async function sitemapgen() {

// create generator
const generator = SitemapGenerator('http://devguildweb.xyz', {
  stripQuerystring: false
});

// register event listeners
generator.on('done', () => {
  // sitemaps created
});

// start the crawler
await generator.start();
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, "public")))

sitemapgen()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Developers Guild' });
});

router.get('/payments', function(req, res, next) {
  res.render('payments');
});

router.get('/invite', function(req, res, next) {
  res.redirect('https://discord.gg/xqUN8KY');
});

router.get('/robots.txt', function(req, res, next){
  res.sendFile(__dirname + "/robots.txt");
});

router.get('/sitemap.xml', function(req, res, next){
  res.sendFile(__dirname + "/sitemap.xml");
});
app.use('/', router);
app.use('/payments', router);
app.use('/invite', router);
app.use('/robots.txt', router);
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
