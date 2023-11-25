//Boiler Code
const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const apiRouter = require('./routes');
//Boiler Code

//ControllerImport

//ControllerImport

//Initialization
app.use(express.json());
app.use(cookieParser());
//Initialization

//Route-ing
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, `./index.html`));
});
//Route-ing

// Not Found Route Handler
app.use('*', (req, res) => {
  // throw new NotFoundError()
  res.status(404).json({ message: "Get requests aren't free buddy" });
});

//Error Handling
// app.use(errorHandler)
// TEMP
app.use((err, _req, _res, _next) => {
  return res.status(500).json({ error: err });
});

export { app };
