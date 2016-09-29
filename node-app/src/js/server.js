const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello world, Macke!\n');
});

app.listen(parseInt(process.env.npm_package_config_port));
console.log(new Date(), " - Running on http://localhost: " + process.env.npm_package_config_port);
