

<template>
    <section class="container-full" :class="styl['top-section']">
        <h1 class="header white" :class="styl['top-section__header']">JAAM HOUSE OF SUSHI</h1>
        <h2 class="sub-title white" :class="styl['top-section__sub-header']">TARA NA SA JAAM</h2>
    </section>
</template>

<style lang="stylus" module='styl'>
 .top-section
    padding: 400px 0
    text-align: center
    background-image: url('/bg-img/home-hero.webp')
    background-size: cover
    background-repeat: no-repate
    box-shadow: inset 0 0 0 1000px rgba(239, 93, 21, 0.6);
    
    &__header
        font-family: var(--secondary-font)
        font-weight: var(--bold)
    &__sub-header
        font-weight: var(--semi-bold)
</style>

