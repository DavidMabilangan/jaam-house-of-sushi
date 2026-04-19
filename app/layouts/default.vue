<script setup>
    import { defineAsyncComponent } from 'vue';


    const topbar = defineAsyncComponent(() => import('~/components/general/topbar'));
</script>


<template>
    <topbar />
    <slot />
</template>