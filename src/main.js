import { createApp } from 'vue'
import App from './App.vue'
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

const app = createApp(App);

app.component('todo-input', TodoInput);
app.component('todo-list', TodoList);

app.mount('#app')
