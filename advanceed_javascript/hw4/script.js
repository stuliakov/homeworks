const button = document.querySelector('.button');
button.onclick = () => {
	console.log('click');
	fetch('https://api.ipify.org/?format=json').then((response) => response.json()).then((json) => {
		findByIp(...Object.values(json));
	});
};

function findByIp(ip) {
	fetch(`http://ip-api.com/json/${ip}?fields=message,continent,country,regionName,city,district`)
		.then((response) => response.json())
		.then((json) => renderData(json));
}

function renderData(object) {
	const ul = document.createElement('ul');

	for (const key in object) {
		const li = document.createElement('li');


			object[key] === '' ? (li.innerText = `${key}: field is empty`) :
			(li.innerText = `${key}: ${object[key]}`);

		ul.appendChild(li);
	}
	document.body.appendChild(ul);
}
