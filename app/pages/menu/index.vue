<script setup>
    import { defineAsyncComponent } from 'vue';

    const Menus = defineAsyncComponent(() => import('~/components/pages/menu/PageContent'))
</script>
<template>
    <Menus/>
</template>