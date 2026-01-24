<script setup>
    import { defineAsyncComponent } from 'vue';
    const home = defineAsyncComponent( () => import('./home/PageContent') );
</script>

<template>
    <home />
</template>