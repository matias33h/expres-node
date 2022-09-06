const express = require('express');
const app = express();

app.use(express.json())
app.use(require('./routes/home.routes'))

app.listen(3000, ()=>console.log(`server running on http://localhost:3000`))

