$(() => {
	$("form").on("submit", (e) => {
		e.preventDefault();
		$.post("/api/friends", 
			{
				name: $("#name").val().trim(),
				age: $("#age").val()
			}, (data) => {
				alert("done");
			})
	})
});