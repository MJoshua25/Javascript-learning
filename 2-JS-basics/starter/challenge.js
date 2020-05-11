/*************************************
* Coding Challenge 1
*/

/*
var heightJohn, heightMark, massJohn, massMark, bmiJohn, bmiMark, isMarkBmiHigher;

heightJohn = parseFloat(prompt('Quelle est la taille de John ?'));
massJohn = parseInt(prompt('Quelle est le poids de John ?'));
heightMark = parseFloat(prompt('Quelle est la taille de Mark ?'));
massMark = parseInt(prompt('Quelle est le poids de Mark ?'));

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massJohn / (heightJohn * heightJohn);

isMarkBmiHigher = bmiMark >= bmiJohn;
console.log("Mark a t'il un plus haut BMI: " +isMarkBmiHigher);

*/

/*************************************
* Coding Challenge 2
*/

/*
var johnTeamPointAverage, mikeTeamPointAverage, maryTeamPointAverage;

johnTeamPointAverage = ( 89 + 120 + 103 )/3;
mikeTeamPointAverage = ( 116 + 94 + 123 )/3;
maryTeamPointAverage = ( 97 + 134 + 105 )/3;

switch (true) {
    case johnTeamPointAverage > mikeTeamPointAverage && johnTeamPointAverage > maryTeamPointAverage:
        console.log("John's team win with : " + johnTeamPointAverage + "points");
        break;
    case mikeTeamPointAverage > johnTeamPointAverage && mikeTeamPointAverage > maryTeamPointAverage:
        console.log("Mike's team win with : " + mikeTeamPointAverage + "points");
        break;
    case maryTeamPointAverage > johnTeamPointAverage && maryTeamPointAverage > mikeTeamPointAverage:
        console.log("Mike's team win : " + maryTeamPointAverage + "points");
        break;
    default:
        console.log('Draw');
}
*/

/*************************************
* Coding Challenge 3
*/

var tipCalculator = function (bill) {
    if(bill<50)
        return 0.2 * bill
    else if (bill>= 50 && bill<=200)
        return 0.15 * bill
    else
        return 0.1 * bill
}

var tips = [tipCalculator(124), tipCalculator(48), tipCalculator(268)]
var finalPaid = [tips[0] + 124, tips[1] + 48, tips[2] + 268]

console.log(tips)
console.log(finalPaid)