submit.addEventListener('click', event => {
	let input = document.getElementById('userName').value;
	let span = document.getElementById('name');
	span.innerHTML = input;
	console.log(input);
});
