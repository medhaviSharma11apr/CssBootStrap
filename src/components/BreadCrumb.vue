<template>
    <!-- Indicates the current page position within the current page hierachy -->

    <div>
        <h1>Heading</h1>
        <BBreadcrumb :items="breadcrumbItems">
            <!-- <BBreadcrumbItem href='https://getbootstrap.com/'>Home</BBreadcrumbItem>
            <BBreadcrumbItem href="#">Library</BBreadcrumbItem>
            <BBreadcrumbItem active>Data</BBreadcrumbItem> -->
        </BBreadcrumb>
    </div>
</template>


<script setup>
// import { BBreadcrumbItem } from 'bootstrap-vue-next'
import { ref } from 'vue'

const breadcrumbItems = ref([
  { text: 'Home', href: '/' },
  { text: 'Library', href: '/library' },
  { text: 'Data', active: true } // The last item should be active
]);

</script>


<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "BreadCrumb",

}

</script>