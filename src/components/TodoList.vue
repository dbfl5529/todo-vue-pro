<template>
  <li class="todo-item" :class="{checked: isCompleted}">
    <div class="checkbox" @click="todoChecked">{{ result }}</div>
    <div class="todo-text">{{ list }}</div>
    <button class="delBtn" @click="remove">x</button>
    <!-- <button @click="$emit('remove', id)>x</button> -->
  </li>
</template>

<script>
export default {
  props: [
    'id',
    'list',
    'isCompleted'
  ],
  emits: ['todo-checked', 'remove'],
  data() {
    return {
    }
  },
  methods: {
    todoChecked() {
      this.$emit('todo-checked', this.id);
    },
    result() {
        if(this.isCompleted === true) {
            return '?';
        } else {
            return '';
        }
    },
    remove() {
        this.$emit('remove', this.id);
    }
  }
};
</script>