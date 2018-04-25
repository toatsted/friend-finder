const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// creates routes to everyhting in ./app/public folder
app.use(express.static(path.join(`${__dirname}/app/public`)));

// sends app and friends array to api routing function
require("./app/routing/apiRoutes.js")(app, require("./app/data/friends.js"));
// sends app to html routing function
require("./app/routing/htmlRoutes.js")(app);

// sets default route to /home
app.use((req, res) => {
	res.redirect("/home");
});

app.listen(PORT, () => console.log(`localhost is listening on port ${PORT}`))