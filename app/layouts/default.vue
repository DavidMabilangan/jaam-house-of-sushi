<script setup>
    import { defineAsyncComponent } from 'vue';


    const topbar = defineAsyncComponent(() => import('~/components/general/topbar'));
    const home = defineAsyncComponent(() => import('~/pages/index.vue'));
</script>


<template>
    <topbar />
    <NuxtPage/>
</template>