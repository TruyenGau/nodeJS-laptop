// const express = require('express');
// require('dotenv').config();


import express from "express";
import 'dotenv/config';
import webRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 3000;

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//config request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config static file: images. css. js
app.use(express.static('public'));

// config routes
webRoutes(app);


app.listen(PORT, () => {
    console.log(`my app runningg :  ${PORT}`)
});