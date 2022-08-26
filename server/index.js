//npm init --yes
// npm i express mongoose dotenv nodemon


require("dotenv").config();
const express = require("express");
const connection = require("./db");
const app = express();

connection()

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Server in running on ${port}... ^0^`))