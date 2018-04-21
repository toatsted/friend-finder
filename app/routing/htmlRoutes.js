let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let app = express();
let PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
})

app.listen(PORT, () => console.log(`localhost is listening on port ${PORT}`))