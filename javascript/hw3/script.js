let num1 = '';
let num2 = '';
let action = '';

do {
	num1 = prompt('Enter first number', num1);
} while (num1 != parseInt(num1));
do {
	num2 = prompt('Enter second number', num2);
} while (num2 != parseInt(num2));
do {
	action = prompt('Enter aciton', action);
} while (!checkAction(action));

function calc(x, y, action) {
	switch (action) {
		case '+':
			return x + y;
		case '-':
			return x - y;
		case '*':
			return x * y;
		case '/':
			return x / y;
	}
}

function checkAction(str) {
	switch (str) {
		case '+':
			return true;
		case '-':
			return true;
		case '*':
			return true;
		case '/':
			return true;
		default:
			return false;
	}
}
// let res = calc(num1, num2, action);

alert(calc(num1, num2, action));
