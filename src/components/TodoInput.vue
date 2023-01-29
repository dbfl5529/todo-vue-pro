<template>
  <div class="todo-input-box">
    <button class="complete-all-btn" :class="{checked: isAllCompleted}" @click="allChecked">?</button>
    <input type="text" class="todo-input-text" placeholder="해야 할 일을 입력해주세요." v-model="enteredTodoValue" @keyup.enter="addTodoList" />
  </div>
</template>

<script>
export default {
  inject: ['todos'],
  emits: ['add-todo', 'all-completed'],
  data() {
    return {
      enteredTodoValue: '',
      isAllCompleted: false
    }
  },
  methods: {
    addTodoList() {
      this.$emit('add-todo', this.enteredTodoValue);
      this.enteredTodoValue = '';
    },
    allChecked() {
      const completedTodos = this.todos.filter((todo) => todo.isCompleted === true);
      if(this.todos.length === completedTodos.length) {
        this.isAllCompleted = false;
      } else {
        this.isAllCompleted = true;
      }
      this.$emit('all-checked', this.isAllCompleted);
    }
  }
};
</script>