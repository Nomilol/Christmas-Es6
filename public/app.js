submit.addEventListener('click', event => {
	const input = document.getElementById('userName').value;
	const span = document.getElementById('name');
	if (input === "") {
		span.innerHTML = 'Père Noël';
	} else {
		span.innerHTML = input;
		console.log(input);
	}
});
