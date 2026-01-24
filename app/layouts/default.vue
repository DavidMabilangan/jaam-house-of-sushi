<script setup>
    import { defineAsyncComponent } from 'vue';


    const topbar = defineAsyncComponent(() => import('~/components/general/topbar'));
    const home = defineAsyncComponent(() => import('~/components/pages/index'));
</script>


<template>
    <topbar />
    <home /> 
</template>