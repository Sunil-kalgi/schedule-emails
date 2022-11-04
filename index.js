

const express = require('express');

require('dotenv').config();

const app = express();
const db = require('./app/models');

try {
  db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to the database!');
} catch (err) {
  console.log('Cannot connect to the database!', err);
}

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ type: 'text/json' }));
app.use(bodyParser.json({ limit: '20mb' }));

require('./app/routes/scheduleEmailRoute')(app);

var port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
