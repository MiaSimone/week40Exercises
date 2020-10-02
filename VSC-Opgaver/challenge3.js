var numbers = [1, 3, 5, 10, 11];

function makeListItem(number) {
  return `<li>${number}</li>`
}
// Denne er god:
let listItems = numbers.map(makeListItem).join("\n")
//console.log(listItems)

// Her skal man lave en function hvilket jeg synes er besværligt:
listItems = numbers.map(function (number) {
  return `<li>${number}</li>`
}).join("\n")
//console.log(listItems)

// Denne er pæn og lige til:
listItems = numbers.map(number => `<li>${number}</li>`).join("\n")
//console.log(listItems)

// Denne virker ikke!!!
// Dette skyldes at den leder efter en refference? 
listItems = numbers.map(number => {
  `<li>${number}</li>`
}).join("\n")
//console.log(listItems)

// Parenteserne er underordnede:
listItems = numbers.map(number => (
  `<li>${number}</li>`
)).join("\n")
console.log(listItems)
