function makeClone(obj) {
	let clone = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if ('object' === typeof obj[prop]) {
				clone[prop] = makeClone(obj[prop]);
			} else {
				clone[prop] = obj[prop];
			}
		}
	}
	return clone;
}
