<template>
    <div>
        <BLink href="https://www.google.com" target="_blank" rel="noopener">Click me</BLink>


        <p v-for="color in [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ]" :key="color">
            <BLink :variant="color"> {{ color }} link </BLink>
        </p>


    </div>
    <!-- <div class="d-flex gap-2 mt-4">
    <BImg v-bind="mainProps" alt="Rounded image" src="https://picsum.photos/250/250/?image=54" />
    <BImg v-bind="mainProps" rounded alt="Rounded image" src="https://picsum.photos/250/250/?image=58" />
    <BImg v-bind="mainProps" rounded-top alt="Top-rounded image" src="https://picsum.photos/250/250/?image=59" />
    <BImg v-bind="mainProps" rounded-end alt="Right-rounded image" src="https://picsum.photos/250/250/?image=56" />
    <BImg v-bind="mainProps" rounded-bottom alt="Bottom-rounded image" src="https://picsum.photos/250/250/?image=52"/>
    <BImg v-bind="mainProps" rounded-start alt="Left-rounded image" src="https://picsum.photos/250/250/?image=54" />
    <BImg v-bind="mainProps" rounded="circle" alt="Circle image" src="https://picsum.photos/250/250/?image=55"/>
    <BImg v-bind="mainProps" rounded="0" alt="Not rounded image" src="https://picsum.photos/250/250/?image=50" />
  </div> -->
    <!-- <div class=" gutter-x bg-danger" tag="neww" >
        <BContainer class="bv-example-row ">
            <BRow>
                <BCol class="column_custom"> Column 1</BCol>
                <BCol class="column_custom"> Column 2 </BCol>
                <BCol class="column_custom"> Column 3</BCol>
            </BRow>
        </BContainer>
        <BContainer class="bv-example-row style_custom fluid">
            <BRow>
                <BCol class="column_custom">1 of 2</BCol>
                <BCol class="column_custom">2 of 2</BCol>
            </BRow>

            <BRow>
                <BCol class="column_custom">1 of 3</BCol>
                <BCol class="column_custom">2 of 3</BCol>
                <BCol class="column_custom">3 of 3</BCol>
            </BRow>
        </BContainer>


        <BContainer class="bv-example-row">
            <BRow class="text-center">
                <BCol class="column_custom">1 of 3</BCol>
                <BCol class="column_custom" cols="8">2 of 3 (wider)</BCol>
                <BCol class="column_custom">3 of 3</BCol>
            </BRow>

            <BRow class="text-center">
                <BCol class="column_custom">1 of 3</BCol>
                <BCol class="column_custom" cols="6">2 of 3 (wider)</BCol>
                <BCol class="column_custom">3 of 3</BCol>
            </BRow>
        </BContainer>
    </div> -->
</template>

<script>
// import { BLink } from 'bootstrap-vue-next/dist/bootstrap-vue-next.umd';


export default {
    name: "GridComponent"
}</script>

<style scoped>
.style_custom {
    border: 2px solid black;
}

.column_custom {
    padding: 1px;
    margin: 1px;
    background-color: darksalmon;
}
</style>