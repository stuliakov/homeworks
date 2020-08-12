const root = document.getElementById('root');

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
	renderListItem(Object.keys(elem), Object.values(elem));
});

function renderListItem(keysSet, valuesSet) {
	if (keysSet.length >= 3 && valuesSet.length >= 3) {
		let ul = document.createElement('ul');
		for (let i = 0; i < keysSet.length; i++) {
			let li = document.createElement('li');
			li.innerHTML = keysSet[i] + ': ' + valuesSet[i];
			ul.appendChild(li);
		}
		root.appendChild(ul);
	}
}
