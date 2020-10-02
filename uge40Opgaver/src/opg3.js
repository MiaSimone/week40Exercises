
console.log("Opg 3");

console.log();
console.log("a)");

var numbers = [1, 3, 5, 10, 11];
/*
    1+3 = 4 [i]+[i+1]
    3+5 = 8
    5+10 = 15
    10+11 = 21
    11+0 = 11
    [4,8,15,21,11]
*/

function callback(array){
    const filtered = [];
    for (let i = 0; i < array.length-1; i++) {
        filtered.push(array[i] + array[i+1]);
    }
    filtered.push(array[array.length-1]);
    //filtered.push(11);
    return filtered;
    
}

console.log(callback(numbers));

var result = numbers.map((x, i) => {

    var whole = x + numbers[i+1];
    

    return whole;
})

console.log(result);

console.log();
console.log("b)");

let listItems = numbers.map(number => `<a href=””>${number}</a>`).join("\n")
console.log(
    '<nav>\n' + 
        listItems
    + '\n</nav>')


console.log();
console.log("c)");

var persons = [
    {name:"Hassan",phone:"1234567"}, 
    {name: "Peter",phone: "675843"}, 
    {name: "Jan", phone: "98547"},
    {name: "Boline", phone: "79345"}
];

const tableRows = persons.map((person) =>  `
    <tr>
        <td>${person.name}</td>
        <td>${person.phone}</td>
    </tr>`
    ).join("\n")

  console.log(tableRows)





