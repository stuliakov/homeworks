let num1 = '';
do {
	num1 = prompt('Enter number');
} while (num1 != parseInt(num1));
if (num1 < 5) {
	console.log('Sorry, no numbers');
} else {
	for (let i = 0; i <= num1; i++) {
		if (i % 5 == 0) {
			console.log(i);
		}
	}
}

let m = '';
let n = '';

do {
	m = prompt('Enter first number');
} while (m != parseInt(m));

do {
	n = prompt('Enter second number');
} while (n != parseInt(n));

console.log('**************PRIME NUMBERS**************');
for (m; m <= n; m++) {
	if (isPrime(m)) {
		console.log(m);
	}
}

function isPrime(n) {
	if (n == 1) {
		return false;
	}
	for (d = 2; d * d <= n; d++) {
		if (n % d == 0) {
			return false;
		}
	}
	return true;
}
