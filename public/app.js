submit.addEventListener('click', event => {
	const input = document.getElementById('userName').value;
	const span = document.getElementById('name');
	const arrayName = [];
	console.log(arrayName);

	if (input === "") {
		span.innerHTML = 'Père Noël';
	} else {
		span.innerHTML = input;
		console.log(input);
	}

	const ul = document.createElement('li');
	document.body.appendChild(ul);
});
