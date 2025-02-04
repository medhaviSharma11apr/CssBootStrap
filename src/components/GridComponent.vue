<template>
    <div class=" gutter-x bg-danger" tag="neww" >
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
    </div>
</template>

<script>

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