import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router'; // Import your router configuration
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap';

const app = createApp(App);
app.use(createPinia());
app.use(router); // Use Vue Router instance

app.mount('#app');
