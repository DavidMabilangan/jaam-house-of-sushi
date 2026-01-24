<script setup>
    import { defineAsyncComponent } from 'vue';

    const home = defineAsyncComponent(() => import('~/components/pages/index'))
</script>

<template>
    <home />
</template>
