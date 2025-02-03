<script setup>
import { ref } from 'vue';
import AlertComponent from '../src/components/AlertComponent.vue'
import AvatarCircular from '../src/components/AvatarCircular.vue'

const show = ref(false);
// const showAlert = ref(false);
</script>

<template>
  <div class="main_container mx-4">
  <BButton variant="primary" @click="show = !show" class="">Click me</BButton>
  <BModal v-model="show">Test</BModal>
   <!-- Correct Accordion Simple Usage -->
  <BAccordion>
    <BAccordionItem title="Section 1">
      Content for section 1.
    </BAccordionItem>
    <BAccordionItem title="Section 2">
      Content for section 2.
    </BAccordionItem>
  </BAccordion>
  <!-- Correct Accordion Usage With Flush  -->
    <hr />
  <BAccordion flush>
  <BAccordionItem title="Accordion Item #1">
    Placeholder content for this accordion, which is intended to demonstrate the
    <code>flush</code> property. This is the first item's accordion body.
  </BAccordionItem>
  <BAccordionItem title="Accordion Item #2">
    Placeholder content for this accordion, which is intended to demonstrate the
    <code>flush</code> property. This is the second item's accordion body. Let's imagine this
    being filled with some actual content.
  </BAccordionItem>
  <BAccordionItem title="Accordion Item #3">
    Placeholder content for this accordion, which is intended to demonstrate the
    <code>flush</code> property. This is the third item's accordion body. Nothing more exciting
    happening here in terms of content, but just filling up the space to make it look, at least at
    first glance, a bit more representative of how this would look in a real-world application.
  </BAccordionItem>
</BAccordion>

<!-- <br> -->

  <!-- Correct Accordion Usage With Free -->

    <hr />
<BAccordion free>
  <BAccordionItem title="Accordion Item #1">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It is also worth
    noting that just about any HTML can go within the <code>default</code> slot, though the
    transition does limit overflow.
  </BAccordionItem>
  <BAccordionItem title="Accordion Item #2">
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It is also worth
    noting that just about any HTML can go within the <code>default</code> slot, though the
    transition does limit overflow.
  </BAccordionItem>
  <BAccordionItem title="Accordion Item #3">
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It is also worth
    noting that just about any HTML can go within the <code>default</code> slot, though the
    transition does limit overflow.
  </BAccordionItem>
</BAccordion>
<hr>
<h2>kk</h2>
<AlertComponent></AlertComponent>

<AvatarCircular></AvatarCircular>


</div>


</template>
