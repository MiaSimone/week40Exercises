
console.log("Opg 2");

var names = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik', 'Mia'];


console.log();
console.log("a)");

// The filter() method creates an array filled with all array elements that pass a test 
// (provided as a function).

/*
    1. create an empty array
    2. loop trough the array
    3. call the callback funtion at every loop
    4. if the result is true, add the element to the empty array
    5. return the array
*/

function myFilter(array, callback){
    const filterArr = []; // empty array        
    // loop though array    
    for(let i = 0; i < array.length; i++) {
        const result = callback(array[i], i, array);        
        // push the current element if result is true        
        if(result)
        filterArr.push(array[i]);     
    }    
    return filterArr;
}

// callback er fx:
// name.indexOf(a) > 1

function filterCallback(name){
    var filtered = name.includes('a');
    return filtered;
}

console.log(myFilter(names, filterCallback));


console.log();
console.log("b)");

// The map() method creates a new array with the results of calling a function for every array element.
// Generisk map metode:
function myMap(array, callback){
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element)
        arrayCopy.push(newItem)
    });
    return arrayCopy;
}

function mapCallback(str){
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}

console.log(myMap(names, mapCallback));











