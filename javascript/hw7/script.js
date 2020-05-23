const TIMER = 10;

const data = [ 'hello', 'world', [ 'GOOD', 'BUY' ], { text: 'one', t2: [ 488, 228 ] } ];

const timerOutput = () => {
	let timer = document.createElement('span');
	let sec = document.createElement('span');

	sec.innerHTML = ' sec';
	timer.innerHTML = TIMER;

	document.body.append(timer);
	document.body.append(sec);

	let interval = setInterval(() => {
		timer.innerHTML--;
		window.document.body.append(timer);
		window.document.body.append(sec);

		if (timer.innerHTML <= 0) {
			clearInterval(interval);
		}
	}, 1000);
};

const display = (data) => {
	const ul = document.createElement('ul');

	const elements = data.map((item) => {
		if (Array.isArray(item)) {
			return display(item);
		}

		if (typeof item === 'object') {
			return display(Object.values(item));
		}

		const li = document.createElement('li');

		li.append(item);

		return li;
	});

	ul.append(...elements);

	return ul;
};

const ul = display(data);

document.querySelector('body').append(ul);
timerOutput();
setTimeout(() => (window.document.body.innerHTML = ''), TIMER * 1000);
