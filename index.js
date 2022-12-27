require('dotenv').config()

const express = require('express');
const connectToDb = require('./db');
const app = express()
connectToDb()
app.use(express.json())
const port = 5000

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})