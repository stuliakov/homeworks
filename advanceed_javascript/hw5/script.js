const button = document.querySelector('.button');
button.onclick = () => {
	console.log('click');
	findIp();
};

async function findIp() {
	let request = await fetch('https://api.ipify.org/?format=json');
	let json = await request.json();
	findByIp(...Object.values(json));
}

async function findByIp(ip) {
	let request = await fetch(`http://ip-api.com/json/${ip}?fields=message,continent,country,regionName,city,district`);
	let json = await request.json();
	renderData(json);
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
