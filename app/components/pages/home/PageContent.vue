<script setup>
    import { defineAsyncComponent } from 'vue';

    const TopSection = defineAsyncComponent(() => import('./section/TopSection'));
    const AboutUs = defineAsyncComponent(() => import('./section/AboutUs'));
</script>

<template>
    <TopSection />
    <AboutUs />
</template>