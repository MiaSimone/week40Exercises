var members = [
    { name: "Peter", age: 14, gender: "male" },
    { name: "Jan", age: 35, gender: "male" },
    { name: "Janne", age: 25, gender: "female" },
    { name: "Martin", age: 22, gender: "male" }]
   
   
  let peter = { name: "Peter", age: 14, gender: "male" }
   
  function addMayDriveProperty(member) {
    let clone = { ...member }
    for (const [key, value] of Object.entries(clone)) {
      if (key === "age" && value > 17) {
        clone.mayDrive = true
      }
      else {
        clone.mayDrive = false
      }
    }
    return clone;
  }
  console.log(peter)
  const newPeter = addMayDriveProperty(peter)
  // Hvis newPeter var en let så kunne man ændre på objektet i sig selv
  // Nu hvor det er en const kan man kun ændre på attributter i objektet
  //newPeter.age = 15;
  
  console.log(peter)
  console.log(newPeter)