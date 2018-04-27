let path = require("path");

module.exports = function(app){
	app.get("/home", (req, res) => {
		res.render("home");
	})

	app.get("/survey", (req, res) => {
		res.render("survey", {
			questions: require("../data/questions.js")
		});
	})
}
