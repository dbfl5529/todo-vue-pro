<template>
  <div class="todo-input-box">
    <button class="complete-all-btn">?</button>
    <input type="text" class="todo-input-text" placeholder="해야 할 일을 입력해주세요." v-model="enteredTodoValue" @keyup.enter="addTodoList" />
  </div>
</template>

<script>
export default {
  emits: ['add-todo'],
  data() {
    return {
      enteredTodoValue: '',
    }
  },
  methods: {
    addTodoList() {
      this.$emit('add-todo', this.enteredTodoValue);
      this.enteredTodoValue = '';
    },
  }
};
</script>