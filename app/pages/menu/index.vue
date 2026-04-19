<script setup>
    import { defineAsyncComponent } from 'vue';

    const menus = defineAsyncComponent(() => import('~/components/pages/menu/PageContent'))
</script>

<template>
    <menus />
</template>
