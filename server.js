let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let routes = {
	html: require("./app/routing/htmlRoutes.js"),
	api: require("./app/routing/apiRoutes.js")
}

let app = express();
let PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes.api(app);
routes.html(app, path);

app.listen(PORT, () => console.log(`localhost is listening on port ${PORT}`))