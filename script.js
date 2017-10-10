// lecture: Objects

/* want to access elements of array via a keyword use object
you can't do that with an array, you have to use an index number

var arr = [ 'peacock', 'marty', true];

var leader = arr[0]; => peacock

var x = [ ]; = arrays
var x = { }; = objects

*/
/*
var peacock = {
	name: 'peacock',
	lastName: 'george',
	yearOfBirth: 1988,
	job: 'dominator',
	isMarried: true
};

console.log(peacock); // this prints whole object

//reading values out of objects:
//dot notation:
console.log(peacock.lastName);

//bracket notation:
console.log(peacock['lastName']);

// can store key in variable
var xyz = 'job';
console.log(peacock[xyz]);

//data mutation example (works the same way as arrays using dot/bracket notation)

peacock.lastName = 'martyPants';
peacock['job'] = 'leader';
console.log(peacock);

// second way of creating new object, just like array:
// array version: var Jane = new Array();

var jane = new Object(); //creates new empty object

//adding things or 'properties' to the object:
jane.name = "jane";
jane.lastName = "georgez";
jane['yearOfBirth'] = 1955;
jane['job'] = 'assistant';
jane['isMarried'] = true;

console.log(jane);

*/

// lecture objects and methods
// objects can have arrays AND functions (use a function expression) too!

//Version 1 of object

/*

var peacock = {
	name: 'peacock',
	lastName: 'george',
	yearOfBirth: 1988,
	job: 'dominator',
	isMarried: true,
	family: ['marty', 'nessie', 'jerry'],
	
	//the issue with this function, is we want to use the yearOfBirth found
	//in the peacock object. Its already there, why not use it? because the funtion 
	//below taks in an argument, it looks for the user to put it in ex:
	//peacock.calculateAge(1780);

	//we need to remove that and use the 'this' keyword to refer to the object, then call the key. 
	//calculateAge: function(yearOfBirth) {
	//	return 2016 - yearOfBirth;
	//}

/
	calculateAge: function(){
		return 2016 - this.yearOfBirth;
	}
};


//calculateAge expression function inside of object looks like that ^ , 
//outside of an object, it would look like this:

//var calculateAge = function(yearOfBirth){
	
//};



//log the whole object
console.log(peacock);

//log the peacock family array
console.log(peacock.family);

//log marty
console.log(peacock.family[0]);

//log the old METHOD, to calculate age if peaock was born in 1990 
//console.log(peacock.calculateAge(1977));

//log the new METHOD, to calcualte age based on the objects own data (don't need arguments);
console.log(peacock.calculateAge());

//can store pieces of object data in variables, even as function returns
var age = peacock.calculateAge();

//just made new key/value pair to the peacock object 
peacock.age = age;

*/

//Version 2 of object

/*
var peacock = {
	name: 'peacock',
	lastName: 'george',
	yearOfBirth: 1988,
	job: 'dominator',
	isMarried: true,
	family: ['marty', 'nessie', 'jerry'],
	calculateAge: function() {
		this.age = 2016 - this.yearOfBirth;
	}
};

//if we don't call the method/function, nothting happens, need to call it for age to apply
peacock.calculateAge();

console.log(peacock);
*/

////////////////////////////////////////////////////////
/// Lecture: loops

// for (countter; iteration; incrementation) {}

//for loop
var names = ['peacock', 'marty', 'nessie', 'super baby nessie', 'jerry'];

for(var i = names.length -1; i >=0; i--) {
	console.log((i + 1) + "). " + names[i]);
}

//while loop
var i = 0;
while(i < names.length){
	console.log(names[i]);
	i++;
}


