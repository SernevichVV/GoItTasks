/**
 * Created by Viktoria on 14.07.2016.
 */

var arrOfNames = []; // create an empty array
for (var i = 1; i < 6; i++) {
    var name = prompt("Enter the " + i + "th name", "");
    //if (!/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u){
    // tried to check input for having letters only with using regular expression
    // but unfortunately I don't know yet how to do it properly,
    // I can do it, just need more time in order to understand
    if (name == "") { // check for empty string
        name = prompt("Please, fill in the text field", "");
        --i;
    }
    arrOfNames.push(name);
}
var searchName = prompt("Enter user's name", "");
var indexOfName = arrOfNames.indexOf(searchName, [0]);
if (indexOfName == -1) {
    alert("Sorry, we don't have user with this name");
}
else {
    var resultName = arrOfNames[indexOfName];
    alert(resultName + " you successfully logged!")
}