let path = require("path");

module.exports = function(app){
	app.get("/home", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	})

	app.get("/survey", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	})

	// sets default route as home
	app.use((req, res) => {
		res.redirect("/home");
	})
}
