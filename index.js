/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", users);

console.log("todos: ", todos);


const id = users[0].id;
const name = users[0].name;
const city = users[0].address.city;

const row = `${id} | ${name} | ${city}`;

console.log("Row: ", row);

let message = "";

for (let i = 0; i < users.length; i++) {
  // const user  = users[i]
  // console.log(user);
  const id = users[i].id;
  const name = users[i].name;
  const city = users[i].address.city;

  const row = `${id} | ${name} | ${city}\n`;
  console.log("Row: ", row);
  // message.push(row) works for array
  message += row; //works for string
}
console.log("MESSAGE: ", message);
// alert(message)

// const userResponse = prompt(
//   "Whos to todo would you like to check? Plaese enter a user id to display the user"
// );

const userResponse = "5";
const selectedUserId = parseInt(userResponse);
console.log("selectedUserId: ", selectedUserId);

// Extract the object that has a username in it
let selectedUser = null;

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  //  console.log("user inside loop:", user);
  if (selectedUserId === user.id) {
    console.log("selectedUser:", user);
    selectedUser = user;
    // alert( user)
  }
}

console.log("SELECTED USER: ", selectedUser.username);
console.log("SELECTED USER: ", selectedUser.id);

console.log("TODOS: ", todos);

//Extract the todos that belong to the selected user
let selectedUserTodos = [];

for (let i = 0; i < todos.length; i++) {
  const todo = todos[i];
  if (selectedUser.id === todo.userId) {
    selectedUserTodos.push(todo);
  }
}
console.log(selectedUserTodos);

//Build a string from selectedUser object and selectedUserTodos

let todoListMessage = `${selectedUser.username}'s todo list:\n`;

for (let i = 0; i < selectedUserTodos.length; i++) {
  const todo = selectedUserTodos[i];
  const row = `${todo.id} | ${todo.title}\n`;
  todoListMessage += row;
}
console.log("todoListMessage: ", todoListMessage);
// alert(todoListMessage);
