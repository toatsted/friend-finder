const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, () => console.log(`localhost is listening on port ${PORT}`))