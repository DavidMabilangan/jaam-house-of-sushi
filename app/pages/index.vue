<script setup>
    import { defineAsyncComponent } from 'vue';

    const home = defineAsyncComponent(() => import('~/components/pages/home/PageContent'))
</script>

<template>
    <home />
</template>
