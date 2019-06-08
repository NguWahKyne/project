/* var arr=[1,2,3,4,5];

var maparr=arr.map(function(v){
	return v * 2;
});

console.log(arr);
console.log(maparr);

var maparr2=arr.map(v=>v*2);
console.log(maparr2);

var filterarr=arr.filter(function(v){
	return v % 2;
});

console.log(filterarr);
var filterarr2=arr.filter(v=>v%2);
console.log(filterarr2);

*/
/* ---********For Class********* ----*/
class Animal{
	constructor(legs){
		this.legs=legs;
	}

	walk(){
		console.log('Animal is walking');
	}
}


class Dog extends Animal{
	walk(){
		console.log('This Dog is walking');
	}
}

var bobby=new Dog(2);
bobby.walk();
