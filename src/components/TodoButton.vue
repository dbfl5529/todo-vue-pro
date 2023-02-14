<template>
  <div class="todo-bottom">
    <span>{{ num }} items left</span>
    <div class="button-group">
      <button
        :class="{ selected: selectedName === 'all' }"
        @click="listSelected('all')"
      >
        All
      </button>
      <button
        :class="{ selected: selectedName === 'active' }"
        @click="listSelected('active')"
      >
        Active
      </button>
      <button
        :class="{ selected: selectedName === 'completed' }"
        @click="listSelected('completed')"
      >
        Completed
      </button>
    </div>
    <button class="clear-completed-btn" @click="listSelected('clear')">
      Clear Completed
    </button>
  </div>
</template>

<script>
export default {
  props: ["num"],
  emits: ["list-type"],
  data() {
    return {
      selectedName: "all",
    };
  },
  methods: {
    listSelected(btn) {
      if (btn === "all") {
        this.selectedName = "all";
        this.$emit("list-type", this.selectedName);
      } else if (btn === "active") {
        this.selectedName = "active";
        this.$emit("list-type", this.selectedName);
      } else if (btn === "completed") {
        this.selectedName = "completed";
        this.$emit("list-type", this.selectedName);
      } else {
        this.selectedName = "all";
        this.$emit("list-type", "clear");
      }
    },
  },
};
</script>
