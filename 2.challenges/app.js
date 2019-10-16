var el_reverse_res = document.getElementById('reverse-result');
var el_order_list_res = document.getElementById('order-list-result');
var el_order_obj_res = document.getElementById('order-obj-result');
var el_uppercase_res = document.getElementById('uppercase-result');
var el_mt_res = document.getElementById('mt-result');
var el_factorial_res = document.getElementById('factorial-result');

var stringTest = 'Lineru';
var listTest = [2, 25, 4, 2, 3, 4, 7];
var objTest = [
  {
    name: 'Homero Simpson',
    age: 53,
    profession: 'nuclear energy operator',
  },
  {
    name: 'Moe Szyslak',
    age: 57,
    profession: 'barman',
  },
  {
    name: 'Montgomery Burns',
    age: 86,
    profession: 'nuclear energy boss',
  },
  {
    name: 'Apu Nahasapeemapetilon',
    age: 45,
    profession: 'owner operator',
  },
];
var stringTestUC = 'fintech';
var tableLimit = 10;
var numberTestF = 43;

el_reverse_res.innerText = reverseString(stringTest);
el_order_list_res.innerText = orderList(listTest);
el_order_obj_res.innerText = JSON.stringify(
  orderObj(objTest),
  null,
  2
);
el_uppercase_res.innerText = upperCaseString(stringTestUC);
el_mt_res.innerText = multiplicationTables(tableLimit);
el_factorial_res.innerText = factorial(numberTestF);

// reverse
function reverseString(str) {
  return str === ''
    ? ''
    : reverseString(str.substr(1)) + str.charAt(0);
}
// order array
function orderList(list) {
  return list.sort(function(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  });
}
// order arrayobject
function orderObj(obj) {
  return obj.sort(function(a, b) {
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
  });
}
// upper case
function upperCaseString(str) {
  return str === ''
    ? ''
    : str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122
    ? String.fromCharCode(str.charCodeAt(0) - 32) +
      upperCaseString(str.substr(1))
    : str.charAt(0) + upperCaseString(str.substr(1));
}
// single for
function multiplicationTables(limit) {
  if (limit === 0) {
    return '';
  } else {
    var t = '';
    for (var index = 1; index <= 10; index++) {
      t = `${t}
${limit}*${index} = ${index * limit}`;
    }
    return `${multiplicationTables(limit - 1)}
			${t}`;
  }
}
// factorial
function factorial(num) {
  num = Math.abs(num);
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
