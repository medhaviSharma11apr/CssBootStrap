import { createApp } from 'vue';
import App from './App.vue';

// Import BootstrapVueNext components
import { BButton, BModal, BAccordion, BAccordionItem, BAlert, BAvatar, BListGroup, BListGroupItem, BBadge, } from 'bootstrap-vue-next';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const app = createApp(App);

// Register BootstrapVueNext components globally
app.component('BButton', BButton);
app.component('BModal', BModal);
app.component('BAlert', BAlert);
app.component('BAvatar', BAvatar);
app.component('BAccordion', BAccordion);
app.component('BBadge', BBadge);
app.component('BListGroup', BListGroup);
app.component('BListGroupItem', BListGroupItem);
app.component('BAccordionItem', BAccordionItem);


app.mount('#app');
