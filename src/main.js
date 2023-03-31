const { createApp } = require('vue');
import App from './App.vue';
import { NavBar, Icon, Button, Divider, Form, Toast } from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(NavBar);
app.use(Icon);
app.use(Button);
app.use(Divider);
app.use(Form);
app.use(Toast);

createApp(App).mount('#app');
