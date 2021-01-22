const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
  }),
);
app.use(morgan('dev'));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to Atlas db');
});
mongoose.connect(
  'mongodb+srv://developer:muvimo@v0.q0wxj.mongodb.net/V0?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  require('./backendPart/routes/users/index')({ app }),
);
// конструктор и точка доступа к методам find и пр. MongoDB
// const Kat = mongoose.model('Kat', katsSchema);

http.createServer(app).listen(5000);
