submit.addEventListener('click', event => {
	let input = document.getElementById('userName').value;
	let span = document.getElementById('print').append(input);
	console.log(input);
});
