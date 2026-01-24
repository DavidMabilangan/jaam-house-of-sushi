<script setup>
    import { defineAsyncComponent } from 'vue';

    const menu = defineAsyncComponent(() => import('~/components/pages/menu/PageContent'))
</script>

<template>
    <menu/>
</template>