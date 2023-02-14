<template>
  <li class="todo-item" :class="{ checked: isCompleted }">
    <div class="checkbox" @click="todoChecked">{{ result }}</div>
    <div class="todo-text" @dblclick="todoEdit(list, id)">{{ list }}</div>
    <button class="delBtn" @click="remove">x</button>
    <!-- <button @click="$emit('remove', id)>x</button> -->
    <input
      v-if="edit.id === id"
      type="text"
      class="edit-input todo-text"
      v-model="edit.list"
      @keyup.enter="todoUpdate"
    />
    <!-- <input type="text" :class="{ edit: edit.id === id }" v-model="edit.list" /> -->
  </li>
</template>

<script>
export default {
  props: ["todos", "id", "list", "isCompleted"],
  emits: ["todo-checked", "update-todo", "remove"],
  data() {
    return {
      edit: {
        // edit 데이터 관리
        list: "",
        id: "",
      },
    };
  },
  computed: {
    result() {
      if (this.isCompleted === true) {
        return "✔";
      } else {
        return "";
      }
    },
  },
  methods: {
    todoChecked() {
      this.$emit("todo-checked", this.id);
    },
    todoEdit(list, id) {
      this.edit = {
        list,
        id,
      };
    },
    todoUpdate() {
      this.$emit("update-todo", this.edit);
      this.edit = {
        list: "",
        id: "",
      };
    },
    remove() {
      this.$emit("remove", this.id);
    },
  },
};
</script>
