const express = require("express");
const path = require('path'); 
let  app = express()

const webpack = require('webpack');
const config = require('../webpack.config');
const compiler= webpack(config);

const webpackDevMiddleWare = require('webpack-dev-middleware')(
  compiler
);

const webpackHotMiddleWare = require('webpack-hot-middleware')(compiler)

app.use(webpackDevMiddleWare);

app.use(webpackHotMiddleWare)

const PORT = 3500;
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", 'index.html'));
});

app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });

app.listen(PORT,  () => console.log(`App listening port ${PORT}`));