




<template>
<BButton  @click="showAlert =!showAlert" class="custom-button mx-4">Show Primary Alert </BButton>
<BAlert :model-value="showAlert" variant="primary">Primary Alert</BAlert>


<BButton  @click="showAlert1 =!showAlert1" class="custom-button">Show Success Message  </BButton>

<BAlert :model-value="showAlert1" variant="success" >
  <h4 class="alert-heading">Well done!</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example text is going to
    run a bit longer so that you can see how spacing within an alert works with this kind of
    content.
  </p>
  <hr />
  <p class="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
  </p>
</BAlert>
</template>

<script setup >
// import { BAlert } from 'bootstrap-vue-next'; 
import {ref} from 'vue'
let showAlert =ref(false);
let showAlert1 =ref(false);
</script>


<script>
export default {
  name: 'AlertComponent',
};
</script>


<style scoped>
.custom-button {
  background-color: #3381ff; /* Custom orange color */
  border-color:black;
  color: white;
}
.custom-button:hover {
  background-color:  #0a4ebb; /* Darker orange */
  border-color: black;
}
</style>




