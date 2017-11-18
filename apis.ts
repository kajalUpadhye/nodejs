var express = require('express');
const port = process.env.PORT || 3000;
const app = express();
User = require('../service.api/data/api.model.ts')
var routes = require('./route/api.route.ts'); 
routes(app);

app.listen(port);

// app.getDetails(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });