console.log("JS Connected");

let usernameInput = document.body.getElementsByClassName("username-input");

function getUser() {
	event.preventDefault();
	console.log(event, "event");

	let codewarsUserUrl = `https://www.codewars.com/api/v1/users/bim240`;
	console.log(codewarsUserUrl);

	//fetch
	fetch(codewarsUserUrl, {
    mode: "no-cors"
	})
		.then((response) => {
			console.log("response", response);
			return response.json();
		})
		.then((jsonData) => {
			console.log(jsonData);
			return jsonData;
		});
}
