<template>
  <div class="todo-bottom">
    <span>3 items left</span>
    <div class="button-group">
      <!-- <button @click="$emit('list-all')">All</button> -->
      <button :class="{ selected: selectedA }" @click="listSelected('all')">
        All
      </button>
      <button :class="{ selected: selectedB }" @click="listSelected('active')">
        Active
      </button>
      <button
        :class="{ selected: selectedC }"
        @click="listSelected('completed')"
      >
        Completed
      </button>
    </div>
    <button class="clear-completed-btn">Clear Completed</button>
  </div>
</template>

<script>
export default {
  props: ["id", "list", "isCompleted"],
  emits: ["list-all", "list-active", "list-complete"],
  data() {
    return {
      // toggleSelect: [],
      selectedA: false,
      selectedB: false,
      selectedC: false,
    };
  },
  computed: {
    // leftItem() {},
  },
  methods: {
    // leftTodos() {
    //   this.$emit("left-todos", this.itemNum);
    // },
    listSelected(btn) {
      if (btn === "all") {
        this.$emit("list-all");
        this.selectedA = true;
        this.selectedB = false;
        this.selectedC = false;
      } else if (btn === "active") {
        this.$emit("list-active");
        this.selectedA = false;
        this.selectedB = true;
        this.selectedC = false;
      } else {
        this.$emit("list-completed");
        this.selectedA = false;
        this.selectedB = false;
        this.selectedC = true;
      }
    },
  },
};
</script>
