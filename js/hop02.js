setInterval(() => {
	let colorRed = Math.floor(Math.random() * 255);
	let colorGreen = Math.floor(Math.random() * 255);
	let colorBlue = Math.floor(Math.random() * 255);
	document.body.style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
}, 250);
