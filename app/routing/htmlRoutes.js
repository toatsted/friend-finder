module.exports = function(app, path){
	app.get("/survey", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	})

	// sets default route as home
	app.use((req, res) => {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	})
}
