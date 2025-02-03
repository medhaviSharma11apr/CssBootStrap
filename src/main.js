import { createApp } from 'vue';
import App from './App.vue';

// Import BootstrapVueNext components
import { BButton, BModal , BAccordion, BAccordionItem, BAlert,} from 'bootstrap-vue-next';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const app = createApp(App);

// Register BootstrapVueNext components globally
app.component('BButton', BButton);
app.component('BModal', BModal);
app.component('BAlert', BAlert);
app.component('BAccordion', BAccordion);
app.component('BAccordionItem', BAccordionItem);


app.mount('#app');
