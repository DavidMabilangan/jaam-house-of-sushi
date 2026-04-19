<script setup>
    import { defineAsyncComponent } from 'vue';

    const TopSection = defineAsyncComponent(() => import('./section/TopSection'));
    const AboutUs = defineAsyncComponent(() => import('./section/AboutUs'));
    const Menu = defineAsyncComponent(() => import('./section/Menu'));  
    const Locations = defineAsyncComponent(() => import('./section/Locations'));
</script>

<template>
    <TopSection />
    <AboutUs />
    <Menu />
    <Locations/>
</template>