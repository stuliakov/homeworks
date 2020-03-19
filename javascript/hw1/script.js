let name = '';
do {
	name = prompt('Please, enter your name', [ name ]);
} while (name == '' || name.match(/(\d+)/));

let age = '';
while (age == '' || isNaN(age)) {
	age = prompt('Please, enter your age', [ age ]);
}

if (age > 22) {
	alert('Welcome, ' + name);
} else if (age > 18) {
	if (confirm('Are you sure you want to continue?')) {
		alert('Welcome, ' + name);
	} else {
		alert('You are not allowed to visit this website.');
	}
} else {
	alert('You are not allowed to visit this website.');
}
