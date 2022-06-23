const express = require('express');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');
const postRoute = require('./routes/postRoute');

// ...

const app = express();

app.use(express.json());

app.use('/', authRoute);
app.use('/', userRoute);
app.use('/', categoryRoute);
app.use('/', postRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
