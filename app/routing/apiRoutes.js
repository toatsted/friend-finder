module.exports = function(app, friends){
	app.get("/api/friends", (req, res) => {

		friends = [
			{
				name: "idiot1",
				age: 20
			},{
				name: "idiot2",
				age: 21
			}
		]

		res.json(friends);
	})
}