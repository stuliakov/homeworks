function createNewUser() {
	let readFirstName = prompt('Enter firstname, please');
	let readLastName = prompt('Enter lastname, please');
	let readBirthday = prompt('Enter your birthday(dd.mm.yyyy), please');

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
	Object.defineProperty(newUser, 'birthday', {
		enumerable: true,
		configurable: false,
		get: function() {
			return readBirthday;
		},
		set: function(newValue) {
			readBirthday = newValue;
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
	Object.defineProperty(newUser, 'getAge', {
		enumerable: true,
		configurable: false,
		get: function() {
			debugger;
			let arrBirthday = readBirthday.split('.');
			let dateBirth = arrBirthday[2] + '.' + arrBirthday[1] + '.' + arrBirthday[0];
			let ageStamp = Date.now() - Date.parse(dateBirth);
			let age = ageStamp / 1000 / 60 / 60 / 24 / 365;
			return Number.parseInt(age);
		}
	});
	Object.defineProperty(newUser, 'getPassword', {
		enumerable: true,
		configurable: false,
		get: function() {
			let login = this.getLogin;
			pass = login[0].toUpperCase() + login.substring(1) + readBirthday.substring(6);
			return pass;
		}
	});
	return newUser;
}
const newUser = createNewUser();
console.log(newUser.getAge);
console.log(newUser.getPassword);
