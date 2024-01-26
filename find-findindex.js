/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 


findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

function findUserByUsername(arr, username) {
  return arr.find(function (users) {
    return users.username === username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 


removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/
const rmUsers = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

function removeUser(arr, username) {
  let idx = arr.findIndex(function(user) {
    return user.username === username;
  })
  if(idx === -1) return;

  return arr.splice(idx, 1)[0];
}
