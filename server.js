const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(`${__dirname}/app/public`)));

require("./app/routing/apiRoutes.js")(app, require("./app/data/friends.js"));
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, () => console.log(`localhost is listening on port ${PORT}`))