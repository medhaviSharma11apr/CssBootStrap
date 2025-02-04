<template>
   <BDropdown text="Dropdown Button" class="me-2 my-4">
  <BDropdownItem>First Action</BDropdownItem>
  <BDropdownItem>Second Action</BDropdownItem>
  <BDropdownItem>Third Action</BDropdownItem>
  <BDropdownDivider />
  <BDropdownItem active>Active action</BDropdownItem>
  <BDropdownItem disabled>Disabled action</BDropdownItem>
</BDropdown>

<div class="d-flex gap-2">
  <BDropdown text="Button text via Prop" class="me-2">
    <BDropdownItem href="#">An item</BDropdownItem>
    <BDropdownItem href="#">Another item</BDropdownItem>
  </BDropdown>
  <BDropdown class="me-2">
    <template #button-content>
      Custom <strong>Content</strong> with <em>HTML</em> via Slot
    </template>
    <BDropdownItem href="#">An item</BDropdownItem>
    <BDropdownItem href="#">Another item</BDropdownItem>
  </BDropdown>
</div>
</template>


<script>
export default {
    name:"DropdownComponent "
}
</script>