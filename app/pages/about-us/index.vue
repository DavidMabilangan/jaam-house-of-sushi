<script setup>
    import { defineAsyncComponent } from 'vue';

    const about_us= defineAsyncComponent(() => import('~/components/pages/about-us/PageContent'))
</script>

<template>
    <about_us/>
</template>