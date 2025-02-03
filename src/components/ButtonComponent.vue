<script setup>
// import { BButton } from 'bootstrap-vue-next/dist/bootstrap-vue-next.umd';




</script>

<script>
export default {
    name: "ButtonComponent"
}
</script>

<template>
    <div>
        <!-- Element Type Button -->
        <BButton variant="primary">
            Primary
        </BButton>

        <BButton variant="danger">Danger</BButton>

        <!--  Link Type button -->

        <BButton href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            I am a Google Link
        </BButton>

        <!-- various other buttons -->
        <BButton variant="outline-primary">Primary</BButton>
        <BButton variant="outline-secondary">Secondary</BButton>
        <BButton variant="outline-success">Success</BButton>
        <BButton variant="outline-danger">Danger</BButton>
        <BButton variant="outline-warning">Warning</BButton>
        <BButton variant="outline-info">Info</BButton>
        <BButton variant="outline-light">Light</BButton>
        <BButton variant="outline-dark">Dark</BButton>
    </div>
</template>
