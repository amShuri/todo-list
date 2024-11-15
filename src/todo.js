export class TodoList {
  constructor() {
    this.todos = [];
    this.groups = ["home", "shop"];
  }

  addTodoGroup(groupName) {
    if (!this.groups.includes(groupName.toLowerCase())) {
      this.groups.push(groupName);
    }
  }

  removeTodoGroup(groupName) {
    const index = this.groups.findIndex((group) => group === groupName);
    this.groups.splice(index, 1);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    const index = this.todos.findIndex((currTodo) => currTodo.id === todo.id);
    this.todos.splice(index, 1);
  }
}

export class Todo {
  static id = 0;
  constructor(title, description, dueDate, priority, status, group) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.group = group;
    this.id = Todo.id++;
  }
}
