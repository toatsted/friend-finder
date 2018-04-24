module.exports = function(app, friends){
	app.get("/api/friends", (data) => {
		return res.json(friends);
	})	

	app.post("/api/friends", (data) => {
				
	})
}
