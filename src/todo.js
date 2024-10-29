class TodoList {
  constructor() {
    this.Home = [];
  }

  createCategory(categoryName) {
    if (!this[categoryName]) {
      this[categoryName] = [];
    }
  }

  addTodo(todo, category) {
    if (this[category]) {
      this[category].push(todo);
    }
  }

  deleteTodo(todo, category) {
    const index = this[category].findIndex(
      (currTodo) => currTodo.id === todo.id
    );
    this[category].splice(index, 1);
  }
}

class Todo {
  static id = 0;
  constructor(title, description, dueDate, priority, status, category) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.category = category;
    this.id = Todo.id++;
  }
}
