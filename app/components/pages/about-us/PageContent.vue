<script setup>
    import { defineAsyncComponent } from 'vue';

    const TopSection = defineAsyncComponent(() => import('./section/TopSection.vue'));
</script>

<template>
    <TopSection />
</template>