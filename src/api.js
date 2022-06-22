const express = require('express');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');

// ...

const app = express();

app.use(express.json());

app.use('/', authRoute);
app.use('/', userRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
