const express = require('express');
const app = express();

const port = process.env.port || 3000

const path = require('path');
const viewsPath = path.join(__dirname, './client-side/src/views');
const publicPath = path.join(__dirname, './client-side/public');

// apis routes
const menus = require('./server-side/routes/menus')


app.use(express.static(publicPath));
app.use('/assets/css/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/assets/js/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/assets/js/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', (req, res) => {
    res.redirect("/menus");
});

app.get('/camera', (req, res) => {
    res.sendFile(path.join(viewsPath, 'index.html'));
})
    
app.get('/menus', (req, res) => {
    res.sendFile(path.join(viewsPath, 'menus/index.html'));
})

app.get('/menus/:name', (req, res) => {
    res.sendFile(path.join(viewsPath, 'menus/detail.html'));
})

app.use('/api/menus', menus )

app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
});