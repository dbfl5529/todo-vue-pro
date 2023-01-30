import { createApp } from "vue";
import App from "./App.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoButton from "./components/TodoButton.vue";

const app = createApp(App);

app.component("todo-input", TodoInput);
app.component("todo-list", TodoList);
app.component("todo-button", TodoButton);

app.mount("#app");
