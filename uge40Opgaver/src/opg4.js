
console.log("Opg 4");

var all= ["Hassan", "Peter", "Carla", "Boline"];
var numbers = [2, 3, 67, 33]; 
var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}];
const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];    

console.log();
console.log("a)");

console.log(all.join("#"));


console.log();
console.log("b)");

function summen(total, num) {
    return total + num;
}

console.log(numbers.reduce(summen));

console.log();
console.log("c)");
// Skal have returneret gennemsnitet af aldrene

function average(list) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i].age;
        count++;
    }
    if (count == 0) {
      return 0; // prevent division by 0
    }
    let avg = sum / count;
    return avg;
  }

console.log(average(members));

console.log();
console.log("d)");






