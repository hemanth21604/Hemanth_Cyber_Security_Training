
let n = [10, 23, 12, 21,54];


let even = [];
for(let i = 0; i < n.length; i++) {
	if (n[i] % 2 == 0)
	even.push(n[i]);
}


console.log(`Even numbers in an array are: ${even}`);
