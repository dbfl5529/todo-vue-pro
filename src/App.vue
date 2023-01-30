<template>
  <header><p>todos</p></header>
  <div class="todo-box">
    <todo-input
      @add-todo="addTodo"
      @all-checked="allCheckedStatus"
    ></todo-input>
    <p v-if="todos.length === 0">추가된 할 일이 없습니다.</p>
    <ul v-else>
      <todo-list
        v-for="todo in todos"
        :key="todo.id"
        :id="todo.id"
        :list="todo.list"
        :is-completed="todo.isCompleted"
        @todo-checked="todoCheckedStatus"
        @remove="removeTodo"
        @update-todo="updateTodoList"
      ></todo-list>
    </ul>
    <todo-button></todo-button>
  </div>
  <p class="info">더블클릭 시 수정 가능!</p>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
    };
  },
  provide() {
    return {
      todos: this.todos,
    };
  },
  methods: {
    addTodo(list) {
      const newTodo = {
        id: new Date().toISOString(),
        list: list,
        isCompleted: false,
      };
      this.todos.push(newTodo);
    },
    todoCheckedStatus(todoId) {
      const identifiedTodo = this.todos.find((todo) => todo.id === todoId);
      identifiedTodo.isCompleted = !identifiedTodo.isCompleted;
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
    allCheckedStatus(allCheck) {
      if (allCheck === true) {
        this.todos.map((todo) => (todo.isCompleted = true));
      } else {
        this.todos.map((todo) => (todo.isCompleted = false));
      }
    },
    updateTodoList(edit) {
      const todo = this.todos.find((todo) => todo.id === edit.id);
      todo.list = edit.list;
    },
  },
};
</script>

<style>
@import "./assets/css/reset.css";
html {
  height: 100%;
}
body {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: #f5f5f5;
  min-height: 100%;
}
#app {
  justify-content: center;
  margin-top: 3rem;
  min-width: 600px;
}
header p {
  padding: 2rem;
  text-align: center;
  color: rosybrown;
  font-size: 5rem;
}
p {
  padding: 27px;
  text-align: center;
  font-size: 20px;
  color: grey;
}
.todo-box {
  background-color: white;
  border: 1px solid #ddd;
}
.todo-input-box {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 3rem;
  border-bottom: 1px solid #ddd;
  justify-content: flex-start;
  align-items: center;
}
button {
  background-color: transparent;
  border: 0;
}
.complete-all-btn {
  color: gray;
  min-width: none;
  min-height: none;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2rem;
}
.complete-all-btn.checked {
  color: green;
}
.todo-input-text {
  width: 80%;
  text-align: center;
  border: 0;
  outline: none;
  font-size: 1.3rem;
}
.todo-item {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid #ddd;
}
.todo-item:hover .delBtn {
  opacity: 1;
}
.checkbox {
  min-width: none;
  min-height: none;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 50px;
  border: 1px solid lightgray;
  cursor: pointer;
  text-align: center;
}
.todo-item.checked .checkbox {
  border: 2px solid darkgray;
  color: green;
}
.todo-text {
  font-size: 1.3rem;
  padding: 0 1rem;
  width: 80%;
}
.todo-item.checked .todo-text {
  font-style: italic;
  text-decoration: line-through;
  color: lightgray;
}
.delBtn {
  opacity: 1;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: lighter;
  cursor: pointer;
}
.todo-bottom {
  height: 3rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}
.button-group {
  flex-direction: row;
  flex-wrap: nowrap;
}
.button-group button {
  border: 1px solid #eee;
  padding: 0.2rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 8px;
  cursor: pointer;
}
.button-group button.selected {
  border: 2px solid rosybrown;
  padding: 0.2rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 8px;
}
.clear-completed-btn:hover {
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
}
.edit-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 590px;
  height: 2.8rem;
  margin: 0;
}
.info {
  margin-top: 1.5rem;
  text-align: center;
  color: #ccc;
}
</style>
