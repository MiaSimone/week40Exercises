
// The filter method returns an array with elements that has passed a test
// Stien for denne opgave: PS C:\Users\miade\Dokumenter\NetBeansProjects\Uge40-2020>

console.log("Opg 1")

var names2 = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik', 'Mia'];

function checkLetter(a){
    return names2.filter(name => name.indexOf(a) > -1);
}

console.log(checkLetter('a'));

