<template>
  <BButton @click="click">Show OffCanvas</BButton>
  <BOffcanvas v-model="show" />
  <hr>
   <BButton @click="click2('start')" class="m-2">Show start</BButton>
  <BButton @click="click2('end')" class="m-2">Show end</BButton>
  <BButton @click="click2('bottom')" class="m-2">Show bottom</BButton>
  <BButton @click="click2('top')" class="m-2">Show top</BButton>

  <BOffcanvas v-model="show2" :placement="placement" />
  <hr>
</template>

<script setup >
import {ref} from 'vue'

const show = ref(false)

const show2 = ref(false)
const placement = ref('start')

const click2 = (place = 'start') => {
  placement.value = place
  show.value = !show.value
}

const click = () => {
  show.value = !show.value
}
</script>