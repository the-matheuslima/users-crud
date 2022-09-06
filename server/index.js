const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./database/connection');
const route = require('./routes/router');

dotenv.config({ path: '.env' })

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(cors())

//mongodb connection
connectDB();

app.use('/', require('./routes/router'))

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})