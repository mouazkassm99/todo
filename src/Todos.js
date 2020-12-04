// let todos = [
//     {
//         id: 1,
//         title: 'My first todo',
//         completed: false
//     },
//     {
//         id: 2,
//         title: 'My second todo',
//         completed: false
//     },
//     {
//         id: 3,
//         title: 'My third todo',
//         completed: false
//     },
// ]

var todos;

fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
  .then((response) => {
      todos = response.json()
    })
  

module.exports.getTodos = ()=>{
    return todos;
}