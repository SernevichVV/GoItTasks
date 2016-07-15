/**
 * Created by Viktoria on 14.07.2016.
 */

var arrOfNames = []; // create an empty array
for (var i = 1; i < 6; i++) {
    var name = prompt("Enter the " + i + "th name", "");
    name = name.trim();
    while (!/^[a-zA-Zа-яА-Я]+$/g.test(name)) { //regular expressions check letters only
        name = prompt("Please, fill the " + i + "th name with letters", "");
        name = name.trim();
    }
    arrOfNames.push(name);
}
var searchName = prompt("Enter user's name", "");
searchName = searchName.trim();
var indexOfName = arrOfNames.indexOf(searchName);
if (indexOfName == -1) {
    alert("Sorry, we don't have user with this name");
}
else {
    var resultName = arrOfNames[indexOfName];
    alert(resultName + " you successfully logged!")
}