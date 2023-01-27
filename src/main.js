import { createApp } from 'vue'
import App from './App.vue'
import TodoInput from './components/TodoInput.vue';

const app = createApp(App);

app.component('todo-input', TodoInput);

app.mount('#app')
