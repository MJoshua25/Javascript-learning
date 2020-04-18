/* ****************
* Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

// single line comment

/***********************
* variable mutation and data type coertion
*/
// Type coercion
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


/***********************
* Basic operators
*/
/*
var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// Typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/***********************
* operators precedence
*/
/*
var now =2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = ( ageJohn + ageMark ) / 2;
console.log(average);

// Multiple assignements
var x, y;
x = y = ( 3 + 5 ) * 4 - 6;
console.log(x, y);

// More operators
x *= 2; // x = x * 2
console.log(x);
x += 10;
console.log(x);
x++; // x = x+1
*/

/***********************
* If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married'){
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry sonn :)');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry sonn :)');
}

var heightJohn, heightMark, massJohn, massMark, bmiJohn, bmiMark, isMarkBmiHigher;

heightJohn = parseFloat(prompt('Quelle est la taille de John ?'));
massJohn = parseInt(prompt('Quelle est le poids de John ?'));
heightMark = parseFloat(prompt('Quelle est la taille de Mark ?'));
massMark = parseInt(prompt('Quelle est le poids de Mark ?'));

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn){
    console.log("Mark's BMI is higher than John");
} else {
    console.log("John's BMI is higher than Mark");
}
*/

/***********************
* Boolean logic
*/

/*
var firstName = 'John';
var age = 16;
if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teeanager.');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/


/***********************
* The ternary Operator and Switch Statements
*/

/*
var firstName = 'John';
var age = 16;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement
var job = 'teacher';
switch (job) {
    case "teacher":
    case "instructor":
        console.log(firstName + ' teaches kids how to code.');
        break;
    case "driver":
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case "designer":
        console.log(firstName + ' design beutiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age <20:
        console.log(firstName + ' is a teeanager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/***********************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: Not falsy values

/*
var height;

height = 23;

if (height || height === 0){
    console.log('Variable is defined');
} else {
    console.log('Variable has Not been defined');
}

// Equality operators
if (height == '23'){
    console.log('The == operator does type coercion');
}
*/

/***********************
* Function
*/

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired');
    }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');