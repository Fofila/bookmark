const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT, 
  { useNewUrlParser: true,
    useUnifiedTopology: true },
  () => {
    console.log('Connected to db!');
  }
);

// Import routes
const authRoute = require("./routes/auth");


// create middlewares
app.use(express.json());

// create route middlewares
app.use('/api/user', authRoute);

app.listen(process.env.PORT, () => {console.log(`Server running on port ${process.env.PORT}`)})