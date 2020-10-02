
// The filter method returns an array with elements that has passed a test

console.log("Opg 1");

console.log();
console.log("a)");
var names = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik', 'Mia'];

console.log("All the names: " + names);

function checkLetter(a){
    return names.filter(name => name.indexOf(a) > -1);
}

console.log("Names with a in them: " + checkLetter('a'));


console.log();
console.log("b)");

// Map creates a new array with the results of calling a function for every array element.
function reverseStrings(str){
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

var reversed = names.map(n => reverseStrings(n));

console.log(reversed);
