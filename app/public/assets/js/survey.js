$(() => {
	$("#submit").on("click", (e) => {
		e.preventDefault();

		let userData = {
			name: $("#name").val().trim(),
			photo: $("#photo").val(),
			scores: [
			   $("#q1").val(),
			   $("#q2").val(),
			   $("#q3").val(),
			   $("#q4").val(),
			   $("#q5").val(),
			   $("#q6").val(),
			   $("#q7").val(),
			   $("#q8").val(),
			   $("#q9").val(),
			   $("#q10").val()]
		};

		// $.post("/api/friends", userData, (data) => {
		// 	$("#matchName").text(data.name);
		// 	$("#matchImg").attr(src, data.photo);
		// 	alert("asdf");
		// })

		$.ajax({
			type: "POST",
			url: "/api/friends",
			data: userData,
			dataType: "json",
			complete: (data) => {
				$("#matchName").text(data.name);
				$("#matchImg").attr(src, data.photo);

				$("#matchModal").modal();
			}
		});

		$.get("/api/friends", (data) => {
			console.log(data);
		})
	})
});
