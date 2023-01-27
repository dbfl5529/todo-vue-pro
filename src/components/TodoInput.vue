<template>
  <li>
    <div></div>
    <div>{{ list }}</div>
    <button @click="removeTodo(index)">x</button>
  </li>
</template>

<script>
export default {
  props: [
    'list',
    'todoCheck'
  ],
  data() {
    return {
      // todoCheck: false,
      // todos: []
    }
  },
  methods: {
    todoChecked() {
      this.$emit('todo-checked')
    },
    result() {

    },
    removeTodo(idx) {
      this.todos.splice(idx, 1);
    }
  }
};
</script>
