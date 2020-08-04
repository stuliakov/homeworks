//    TASK 1
let arr = [ 'Kyiv', 'Berlin', 'Dubai', 'Moscow', 'Paris' ];
console.log('1) destructured by spread', ...arr);

//    TASK 2
const employee = { name: 'Josh', salary: 5000 };
let { name, salary } = employee;
console.log('name:', name, 'salary:', salary);

//    TASK 3
const array = [ 'value', 'showValue' ];
let [ value, showValue ] = array;
alert(value);
alert(showValue);
