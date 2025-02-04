import { createApp } from 'vue';
import App from './App.vue';

// Import BootstrapVueNext components
import { BButton,BCol,BImg, BModal,BRow,BContainer, BFormInput,BFormDatalist,BFormInvalidFeedback,BFormFloatingLabel, BFormSelect,BFormCheckboxGroup,BFormCheckbox, BAccordion,BFormGroup, BAccordionItem, BAlert, BAvatar, BListGroup, BListGroupItem, BBadge, BBreadcrumb, BBreadcrumbItem, BCard, BCarousel, BCarouselSlide, BDropdown, BDropdownItem, BForm, } from 'bootstrap-vue-next';

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
app.component('BBreadcrumb', BBreadcrumb);
app.component('BBreadcrumbItem', BBreadcrumbItem);
app.component('BCard', BCard);
app.component('BCarousel', BCarousel);
app.component('BCarouselSlide', BCarouselSlide);
app.component('BDropdown', BDropdown);
app.component('BDropdownItem', BDropdownItem);
app.component('BForm', BForm);
app.component('BFormGroup', BFormGroup);
app.component('BFormInput', BFormInput);
app.component('BFormCheckboxGroup', BFormCheckboxGroup);
app.component('BFormCheckbox', BFormCheckbox);
app.component('BFormSelect', BFormSelect);
app.component('BFormFloatingLabel', BFormFloatingLabel);
app.component('BFormInvalidFeedback', BFormInvalidFeedback);
app.component('BFormDatalist', BFormDatalist);
app.component('BContainer', BContainer);
app.component('BRow', BRow);
app.component('BCol', BCol) ;
app.component('BImg', BImg) ;


// BImg



app.mount('#app');
