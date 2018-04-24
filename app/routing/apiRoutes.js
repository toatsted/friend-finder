module.exports = function(app, friends){
	app.get("/api/friends", (req, res) => {
		return res.json(friends);
	})	

	app.post("/api/friends", (req, res) => {
		friends.push(req.body);
	})
}
