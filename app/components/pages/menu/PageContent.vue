<script setup>
    import { defineAsyncComponent } from 'vue';

    const TopSection = defineAsyncComponent(() => import('./sections/TopSection'));

</script>

<template>
    <TopSection />
</template>