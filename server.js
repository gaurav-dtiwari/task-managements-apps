const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var port=process.env.PORT || 3001;
const MongoDBURI = process.env.MONGO_URI || 'mongodb://localhost/pm_tools';
mongoose.connect(MongoDBURI,{
  useUnifiedTopology:true,
  useNewUrlParser:true
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
})
mongoose.set('debug', true);
// console.debug();
// app.use(session({
//   secret: ',8gzJ2c^\DBq',
//   resave: true,
//   saveUninitialized: false,
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const index = require('./routes/index');
app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('File Not Found');
  err.status = 404;
  return res.render('error-404.ejs');
  next(err);
});
// define as the last app.use callback
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});
app.listen(port,() => {
  console.log(`Express app listening on port ${port}`);
});