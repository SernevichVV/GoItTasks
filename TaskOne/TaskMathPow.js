/**
 * Created by Viktoria on 13.07.2016.
 */


var strNumb = (prompt("Enter the number", ""));
var strDegree = (prompt("Enter the degree", ""));

while (strNumb == "" || isNaN(strNumb) || strDegree == "" || isNaN(strDegree)) {
    debugger;
    strNumb = (prompt("Please, enter the number", ""));
    strDegree = (prompt("Please, enter the degree", ""));
}
var numNumb = +strNumb;
var numDegree = +strDegree;
console.log("Type of num is ", typeof numDegree);
if (numDegree == 0) {
    console.log("Result is 1");
}
else {
    var result = 1;
    while (numDegree > 0) {
        result *= numNumb;
        numDegree--;
    }
}

console.log("Result is", result);