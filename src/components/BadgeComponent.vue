<template>
    <div class="mainomponent">
        <h1>
            Example heading
            <BBadge>New</BBadge>
        </h1>
        <h2>
            Example heading
            <BBadge>New</BBadge>
        </h2>
        <h3>
            Example heading
            <BBadge>New</BBadge>
        </h3>
        <h4>
            Example heading
            <BBadge>New</BBadge>
        </h4>
        <h5>
            Example heading
            <BBadge>New</BBadge>
        </h5>
        <h6>
            Example heading
            <BBadge>New</BBadge>
        </h6>
        <BButton variant="primary">
            Notifications
            <BBadge variant="light">4</BBadge>
        </BButton>

        <BButton variant="primary" class="position-relative mx-4">
            Inbox
            <BBadge variant="danger" class="position-absolute top-0 start-10 translate-middle  rounded-circle " width="10" height="90">99+</BBadge>
        </BButton>
    </div>
</template>


<script>

export default {
    name: 'BadgeComponent',
};

</script>