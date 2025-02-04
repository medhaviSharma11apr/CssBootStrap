<template>
    <div>
        <BButton @click="showModal=!showModal"> show modal</BButton>
        <BModal v-model="showModal"  title="Hello, World!"></BModal>
    </div>
</template>

<script setup >
// import { BButton } from 'bootstrap-vue-next/dist/bootstrap-vue-next.umd';

import {ref} from 'vue';

var showModal = ref(false);


</script>