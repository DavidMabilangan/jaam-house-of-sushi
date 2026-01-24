<script setup>
import { useLinks } from '~/stores/links'

const linksStore = useLinks()
</script>

<template>
  <nav>
    <div :class="styl['nav']">
      <p>logo</p>
      <ul :class="styl['nav__menu']">
        <li v-for="(link, index) in linksStore.links" :key="index" :class="styl['nav__menu-item']">
          <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="stylus" module="styl">
    .nav
        display: flex
        justify-content: space-between
        align-items: center
        &__menu
            list-style: none
            display: flex
            gap: 20px
            text-decoration: none
            &-item
                text-decoration: none
                a
                    text-decoration: none

</style>
    