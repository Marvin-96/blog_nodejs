
const express = require('express')
const path = require('path');
const app = express();
const ejs = require('ejs-locals');
const port = 3000

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.engine('ejs', ejs);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"views"));

app.use('/', express.static(path.resolve(__dirname, '../public')));

console.log('path', path.resolve(__dirname, '../public'));

