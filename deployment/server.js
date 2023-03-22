'use strict';

const http = require("http");
const express = require('express');
const path = require("path");

// Constants
const PORT = 8080;

// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public/")));

const server = http.createServer(app);

server.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}`);
});
