module.exports = function(app, friends){
	app.get("/api/friends", (req, res) => {
		return res.json(friends);
	})	

	app.post("/api/friends", (req, res) => {
		let user = req.body
		let compare = [];
		friends.forEach((value, index) => {
			let score = 0;
			user.scores.forEach((uValue, uIndex) => {
				score += Math.abs(uValue - friends[index].scores[uIndex]);
			})
			compare.push(score);
		})

		return friends[compare.indexOf(Math.min.apply(Math, compare))];

		friends.push(user);
	})
}
