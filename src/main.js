import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import components from './components/UI';
import 'virtual:svg-icons-register'
// fonts
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

const app = createApp(App)
components.forEach(component =>{
	app.component(component.name, component)
})

app.mount('#app')
