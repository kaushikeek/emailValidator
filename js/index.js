let result = {
	tag: "",
	free: true,
	role: false,
	user: "kaushikeekashyap9",
	email: "kaushikeekashyap9@gmail.com",
	score: 0.64,
	state: "deliverable",
	domain: "gmail.com",
	reason: "valid_mailbox",
	mx_found: true,
	catch_all: null,
	disposable: false,
	smtp_check: true,
	did_you_mean: "",
	format_valid: true,
};

SubmitBtn.addEventListener("click", async (e) => {
	e.preventDefault();
	console.log("Clicked!");
	resultCont.innerHTML = `<img width="145" src="img/loading.svg" alt="">`;
	let key = "ema_live_uyqhFKCwOhGfbtHbGU5wvIrnLhzZZXj0Q8oyGlwJ";
	let email = document.getElementById("username").value;
	let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
	let res = await fetch(url);
	let result = await res.json();
	let str = " ";
	for (key of Object.keys(result)) {
		if (result[key] !== "" && result[key] !== " ") {
			str = str + `<div>${key}: ${result[key]}</div>`;
		}
	}

	console.log(str);
	resultCont.innerHTML = str;
});
