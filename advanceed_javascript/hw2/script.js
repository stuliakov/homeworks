const root = document.getElementById('root');
const ul = document.createElement('ul');

const books = [
	{
		author: 'Скотт Бэккер',
		name: 'Тьма, что приходит прежде',
		price: 70
	},
	{
		author: 'Скотт Бэккер',
		name: 'Воин-пророк'
	},
	{
		name: 'Тысячекратная мысль',
		price: 70
	},
	{
		author: 'Скотт Бэккер',
		name: 'Нечестивый Консульт',
		price: 70
	},
	{
		author: 'Дарья Донцова',
		name: 'Детектив на диете',
		price: 40
	},
	{
		author: 'Дарья Донцова',
		name: 'Дед Снегур и Морозочка'
	}
];

books.forEach((elem) => {
	let diff = [ 'author', 'name', 'price' ].filter((x) => Object.keys(elem).indexOf(x) == -1);

	try {
		if (!diff.length == 0) {
			throw new Error();
		} else {
			renderListItem(Object.keys(elem), Object.values(elem), ul);
		}
	} catch (e) {
		console.error('Field with key:', ...diff, 'not found');
	}
});

function renderListItem(keysSet, valuesSet, ul) {
	for (let i = 0; i < keysSet.length; i++) {
		let li = document.createElement('li');
		li.innerHTML = keysSet[i] + ': ' + valuesSet[i];
		ul.appendChild(li);
	}
}

root.appendChild(ul);
