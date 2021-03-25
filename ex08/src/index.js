// Lodash

const _ = require("lodash");

// only change code below this line
// users nested array with four objects starts here
users = [
  { firstName: "John", lastName: "Doe", age: 24, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];
// users nested array with four objects ends here

// getUsers function - list of users starts here
    function getUsers() {
        var output = [];
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);        
    }
        return output;
    }
// getUsers function - list of users ends here

// findUser(lastNmae, gender) function starts here
function findUser(lastName, gender) {
  try {
    // add appropriate code here
  } catch (error) {
    return; // change this line
    console.log(); // Change this line
  }
}
// findUser(lastName, gender) function ends here

// Only change code above this line
getUsers();
findUser(); // Change this line

module.exports = findUser;
