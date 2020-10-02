import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import userFacade from "./userFacade"
import jokeFacade from "./jokeFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
  // We are returning a string
  // opg1
  function makeListItems(){
    const jokes = jokeFacade.getJokes();
    let jokeList = jokes.map(joke => "<li>" + joke + "</li>");
    //let jokeList = jokes.map(joke => `<li>$(joke)</li>`)
    const listItems = jokeList.join("\n");
    document.getElementById("jokes").innerHTML = listItems;
  }
  makeListItems();

  // opg2
  let singleJokeInputBtn = document.getElementById("singleJokeInputBtn");
  singleJokeInputBtn.addEventListener('click', (event) => {
      event.preventDefault();
      let singleJokeTextInput = document.getElementById("singleJokeTextInput").value;
      let singleJoke = document.getElementById("singleJoke");
      singleJoke.innerHTML = jokeFacade.getJokeById(singleJokeTextInput);
  });

  // opg3
  let addJokeInputBtn = document.getElementById("addJokeInputBtn");
  addJokeInputBtn.addEventListener('click', (event) => {
      event.preventDefault();
      let newJokeTextInput = document.getElementById("newJokeTextInput").value;
      // henter p'tagget
      let addedJokePrint = document.getElementById("addedJokePrint");
      jokeFacade.addJoke(newJokeTextInput);
      addedJokePrint.innerHTML = "Joke: " + "\""+newJokeTextInput+"\"" + " is added!";
      makeListItems();
  });
  

/* JS For Exercise-2 below */
  let quoteButton = document.getElementById("quoteButton");
  quoteButton.addEventListener('click', (event) => {
      event.preventDefault();
      setInterval(callback(), 3600000);
  });

  function callback() {
    let url = 'https://studypoints.info/jokes/api/jokes/period/hour';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // henter p'tagget
            let quotePrint = document.getElementById("quotePrint");
            quotePrint.innerHTML = data.joke;
        });  
  }



/* JS For Exercise-4 below */

function makeUsersTable(){
  userFacade.getUsers()
  .then(users =>{
    const userRows = users.map(user => `
      <tr>
        <td>${user.id}</td>
        <td>${user.age}</td>
        <td>${user.name}</td>
        <td>${user.gender}</td>
        <td>${user.email}</td>
      </tr>
    `);
    const userRowsAssStrings = userRows.join("");
    document.getElementById("allUserRows").innerHTML = userRowsAssStrings;
  });
}
makeUsersTable();

  // ---------------------------------------- Get user: ---------------------------------------------------

  let singleUserInputBtn = document.getElementById("singleUserInputBtn");
  singleUserInputBtn.addEventListener('click', (event) => {
      event.preventDefault();
      // id'et
      let singleUserTextInput = document.getElementById("singleUserTextInput").value;
      // p tagget
      let userName = document.getElementById("userName");
      let userAge = document.getElementById("userAge");
      let userGender = document.getElementById("userGender");
      let userEmail = document.getElementById("userEmail");

      userFacade.getUser(singleUserTextInput)
      .then(data => {
        console.log(data.name)
        if (data.name == undefined){
          userName.innerHTML = "";
          userAge.innerHTML = "";
          userGender.innerHTML = "";
          userEmail.innerHTML = "";
          document.getElementById("userError").innerHTML = 
          `<p class="alert alert-danger" role="alert">User does not exist</p>`;
        } else {
          userName.innerHTML = "Name: " + data.name;
          userAge.innerHTML = "Age: " + data.age;
          userGender.innerHTML = "Gender: " + data.gender;
          userEmail.innerHTML = "Email: " + data.email;
        }
      });
  });    

  // ------------ Add user ------------
  let submit = document.getElementById("submit");
  submit.addEventListener('click', (event) => {
      event.preventDefault();
      // Info:
      let age = document.getElementById("age").value;
      let name = document.getElementById("name").value;
      let gender = document.getElementById("gender").value;
      let email = document.getElementById("email").value;

      const newUser = {
        age,
        name,
        gender,
        email,
      }
      userFacade.addUser(newUser)
      .then( makeUsersTable(), document.getElementById("addError").innerHTML = "")
      .catch(err =>{
        if(err.status){
          err.fullError.then(e=> document.getElementById("addError").innerHTML = 
          `<p class="alert alert-danger" role="alert">${e.msg}</p>`)
        }
        else{console.log("Network error"); }
     });
    
  });    
  
  // ------------ Edit user ------------
  let submitEdit = document.getElementById("submitEdit");
  submitEdit.addEventListener('click', (event) => {
      event.preventDefault();
      // get id:
      let id = document.getElementById("userIDEdit").value;
      // Info:
      let age = document.getElementById("ageEdit").value;
      let name = document.getElementById("nameEdit").value;
      let gender = document.getElementById("genderEdit").value;
      let email = document.getElementById("emailEdit").value;

      const newUser = {
        age,
        name,
        gender,
        email,
      }
      newUser.id = id;

      userFacade.editUser(newUser)
      .then( makeUsersTable(), document.getElementById("editError").innerHTML = "")
      .catch(err =>{
        if(err.status || !id>=100){
          err.fullError.then(e=> document.getElementById("editError").innerHTML = 
          `<p class="alert alert-danger" role="alert">${e.msg}</p>`)
        } 
        else{console.log("Network error"); }
      });     
  });    

  // ------------ Delete user ------------
  let submitDelete = document.getElementById("submitDelete");
  submitDelete.addEventListener('click', (event) => {
      event.preventDefault();
      // get id:
      let id = document.getElementById("userIDDelete").value;

      userFacade.deleteUser(id)
      .then( makeUsersTable(), document.getElementById("deleteError").innerHTML = "")
      .catch(err =>{
        if(err.status){
          err.fullError.then(e=> document.getElementById("deleteError").innerHTML = 
          `<p class="alert alert-danger" role="alert">${e.msg}</p>`)
        } 
        else{console.log("Network error"); }
      }); 
  });  


/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex4_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex4": hideAllShowOne("ex4_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");


