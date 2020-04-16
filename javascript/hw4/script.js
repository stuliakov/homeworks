function createNewUser() {
	let readFirstName = prompt('Enter firstname, please');
	let readLastName = prompt('Enter lastname, please');
	const newUser = {};
	Object.defineProperty(newUser, 'firstName', {
		enumerable: true,
		configurable: false,
		get: function() {
			return readFirstName;
		},
		set: function(newValue) {
			readFirstName = newValue;
		}
	});
	Object.defineProperty(newUser, 'lastName', {
		enumerable: true,
		configurable: false,
		get: function() {
			return readLastName;
		},
		set: function(newValue) {
			readLastName = newValue;
		}
	});
	Object.defineProperty(newUser, 'getLogin', {
		enumerable: true,
		configurable: false,
		get: function() {
			let some = this.firstName[0] + this.lastName;
			return some.toLowerCase();
		}
	});
	return newUser;
}
const newUser = createNewUser();
console.log(newUser.getLogin);
