const newUser = {};
function createNewUser() {
	let readFirstName = prompt('Enter firstname, please');
	let readLastName = prompt('Enter lastname, please');
	Object.defineProperty(newUser, 'firstName', {
		value: readFirstName,
		enumerable: true,
		writable: false,
		get firstName() {
			return this.firstName;
		},
		set firstName(newFirstName) {
			this.firstName = newFirstName;
		}
	});
	Object.defineProperty(newUser, 'lastName', {
		value: readLastName,
		enumerable: true,
		writable: false,
		get lastName() {
			return this.lastName;
		},
		set lastName(newLastName) {
			this.lastName = newLastName;
		}
	});
	let getLogin = function() {
		let some = newUser.firstName[0] + newUser.lastName;
		return some.toLowerCase();
	};
	Object.defineProperty(newUser, 'getLogin', {
		value: getLogin().valueOf(),
		enumerable: true,
		get getLogin() {
			return this.getLogin;
		}
	});
	return newUser;
}
createNewUser();
console.log(newUser.getLogin);
