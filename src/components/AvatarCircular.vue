<template>
    <div>
        <p>Using stand-alone:</p>
        <div class="d-flex mb-4 mx-4" style="column-gap: 1%">
            <BAvatar />
            <BAvatar variant="primary" text="BV" />
            <BAvatar variant="info" src="https://placekitten.com/300/300" />
            <BAvatar variant="success" />
        </div>
        <p>Using in components (list group) example:</p>
        <BListGroup style="max-width: 300px" class="mx-4">
            <BListGroupItem class="d-flex align-items-center">
                <BAvatar class="mx-3" />
                <span class="me-auto">J. Circlehead</span>
                <BBadge>5</BBadge>
            </BListGroupItem>
            <BListGroupItem class="d-flex align-items-center">
                <BAvatar variant="primary" text="BV" class="mx-3" />
                <span class="me-auto">BootstrapVueNext</span>
                <BBadge>12</BBadge>
            </BListGroupItem>
            <BListGroupItem class="d-flex align-items-center">
                <BAvatar variant="info" src="https://placekitten.com/300/300" class="mx-3" />
                <span class="me-auto">Super Kitty</span>
                <BBadge>9</BBadge>
            </BListGroupItem>
            <BListGroupItem class="d-flex align-items-center">
                <BAvatar variant="success" class="mx-3" />
                <span class="me-auto">ACME group</span>
                <BBadge>7</BBadge>
            </BListGroupItem>
        </BListGroup>
        <div class="d-flex" style="column-gap: 1%">
            <BAvatar src="https://picsum.photos/30/30/?image=40" />
            <BAvatar src="https://picsum.photos/30/30/?image=40" size="6rem" />
        </div>
        <div>
            <div class="d-flex" style="column-gap: 1%">
                <BAvatar variant="secondary" />
                <BAvatar variant="primary" />
                <BAvatar variant="dark" />
                <BAvatar variant="light" />
                <BAvatar variant="success" />
                <BAvatar variant="danger" />
                <BAvatar variant="warning" />
                <BAvatar variant="info" />
            </div>
        </div>

        <div class="d-flex" style="column-gap: 1%">
            <BAvatar />
            <BAvatar size="sm" />
            <BAvatar size="lg" />
            <BAvatar :size="24" />
            <BAvatar size="3em" />
            <BAvatar size="72px" />
        </div>

        <BAvatarGroup size="60px">
            <BAvatar />
            <BAvatar text="BV" variant="primary" />
            <BAvatar src="https://placekitten.com/300/300" variant="info" />
            <BAvatar text="OK" variant="danger" />
            <BAvatar variant="warning" />
            <BAvatar src="https://placekitten.com/320/320" variant="dark" />
            <BAvatar variant="success" />
        </BAvatarGroup>

        <BAvatarGroup size="5rem">
            <BAvatar />
            <BAvatar />
            <BAvatar />
            <BAvatar />
            <BAvatar />
        </BAvatarGroup>
    </div>
</template>

<script>
export default {
    name: 'AvatarCircular',
};
</script>