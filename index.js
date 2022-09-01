// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

//añadi yo
app.use(express.urlencoded({extended: true}));
app.use(express.json({type:"*/*"}));
app.use(express.json());
const cors = require("cors");
app.use(cors());

//paquete pg
const { runMain } = require('module');
const { Pool } = require('pg');
const pool = new Pool({
  user: 'rscsichfurorjt',
  host: 'ec2-35-168-122-84.compute-1.amazonaws.com',
  database: 'ddc5nmjn0unhqo',
  password: 'baf5c85d46d5bbbbe602b7ce3438793bb1a59370ab10edc29a4bf9567a63c846',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  }
})
pool.connect();



// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
