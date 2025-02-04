<template>
    <div >
        <BListGroup class="mt-4">
  <BListGroupItem href="https://www.google.com">Google </BListGroupItem>
  <BListGroupItem active >Dapibus ac facilisis in</BListGroupItem>
  <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
  <BListGroupItem>Morbi leo risus</BListGroupItem>
  <BListGroupItem>Porta ac consectetur ac</BListGroupItem>
  <BListGroupItem>Vestibulum at eros</BListGroupItem>
</BListGroup>


<BListGroup class="mt-4">
  <BListGroupItem>Default list group item</BListGroupItem>
  <BListGroupItem variant="primary">Primary list group item</BListGroupItem>
  <BListGroupItem variant="secondary">Secondary list group item</BListGroupItem>
  <BListGroupItem variant="success">Success list group item</BListGroupItem>
  <BListGroupItem variant="danger">Danger list group item</BListGroupItem>
  <BListGroupItem variant="warning">Warning list group item</BListGroupItem>
  <BListGroupItem variant="info">Info list group item</BListGroupItem>
  <BListGroupItem variant="light">Light list group item</BListGroupItem>
  <BListGroupItem variant="dark">Dark list group item</BListGroupItem>
</BListGroup>


<BListGroup numbered class="mt-4" >
  <BListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <BBadge variant="primary" pill>14</BBadge>
  </BListGroupItem>
  <BListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Dapibus ac facilisis in
    </div>
    <BBadge variant="primary" pill>2</BBadge>
  </BListGroupItem>
  <BListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Morbi leo risus
    </div>
    <BBadge variant="primary" pill>1</BBadge>
  </BListGroupItem>
</BListGroup>
    </div>
</template>

<script>

</script>