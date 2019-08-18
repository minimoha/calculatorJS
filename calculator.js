let plus = document.getElementById('plus')

plus.onclick = function(){
	let input = document.getElementById('input')
	input.value += ' + '
}

let minus = document.getElementById('minus')
minus.onclick = function(){
	let input = document.getElementById('input')
	input.value += ' - '
}

let equal = document.getElementById('equal')
equal.onclick = function(){
	let input = document.getElementById('input')
	input.value = eval(input.value)
}

let one = document.getElementById('one')
one.onclick = function(){
	let input = document.getElementById('input')
	input.value += '1'
}

let two = document.getElementById('two')
two.onclick = function(){
	let input = document.getElementById('input')
	input.value += '2'
}

let three = document.getElementById('three')
three.onclick = function(){
	let input = document.getElementById('input')
	input.value += '3'
}
let four = document.getElementById('four')
four.onclick = function(){
	let input = document.getElementById('input')
	input.value += '4'
}
let five = document.getElementById('five')
five.onclick = function(){
	let input = document.getElementById('input')
	input.value += '5'
}
let six = document.getElementById('six')
six.onclick = function(){
	let input = document.getElementById('input')
	input.value += '6'
}
let seven = document.getElementById('seven')
seven.onclick = function(){
	let input = document.getElementById('input')
	input.value += '7'
}
let eight = document.getElementById('eight')
eight.onclick = function(){
	let input = document.getElementById('input')
	input.value += '8'
}
let nine = document.getElementById('nine')
nine.onclick = function(){
	let input = document.getElementById('input')
	input.value += '9'
}
let zero = document.getElementById('zero')
zero.onclick = function(){
	let input = document.getElementById('input')
	input.value += '0'
}
let divide = document.getElementById('divide')
divide.onclick = function(){
	let input = document.getElementById('input')
	input.value += ' / '
}
let times = document.getElementById('times')
times.onclick = function(){
	let input = document.getElementById('input')
	input.value += ' * '
}
let clear = document.getElementById('clear')
clear.onclick = function(){
	let input = document.getElementById('input')
	input.value = ''
	// val = input.value
	// console.log(val)
	// if (val == NaN) {
	// 	a = input.value
	// 	input.value = ''
	// } else {
	// 	a = String(val).slice(0, -1)
	// 	input.value = parseInt(a)
	// }
	
}