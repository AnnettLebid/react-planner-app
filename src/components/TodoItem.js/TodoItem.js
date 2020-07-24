//testing area need to implement TodoItem

todos = [
  {
    id: 1,
    title: "a",
    isDone: false,
    favourite: false,
  },
  {
    id: 2,
    title: "b",
    isDone: true,
    favourite: false,
  },
  {
    id: 3,
    title: "c",
    isDone: false,
    favourite: false,
  },
  {
    id: 4,
    title: "d",
    IsDone: true,
    favourite: false,
  },
];
const doneList = todos.filter((todo) => todo.isDone);
const todoList = todos.filter((todo) => !todo.isDone);
console.log(doneList);
console.log(todoList)
