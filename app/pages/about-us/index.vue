<script setup>
    import { defineAsyncComponent } from 'vue';

    const about = defineAsyncComponent(() => import('~/components/pages/about-us/PageContent'))
</script>

<template>
    <about />
</template>