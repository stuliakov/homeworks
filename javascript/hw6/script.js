let array = [ 'hello', 'world', 23, '23', null ];
let type = 'string';
const filterBy = (array, type) => {
	let filteredArray = [];
	for (let item of array) {
		if (typeof item !== type) {
			filteredArray.push(item);
		}
	}
	return filteredArray;
};
console.log(filterBy(array, type));
