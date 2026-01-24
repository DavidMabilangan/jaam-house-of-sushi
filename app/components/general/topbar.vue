<script setup>
import { useLinks } from '~/stores/links'
import { useSocials } from '~/stores/socials';
const linksStore = useLinks()
const socialStore = useSocials();
</script>

<template>
  <nav>
    <div :class="styl['nav']" >
      <div class="container" :class="styl['nav__outter']">
        <NuxtLink to="/">
          <NuxtImg src="/LOGO.webp" alt="Jaam House of SUSHI" :class="styl['nav__outter-logo']" />
        </NuxtLink>
        <div :class="styl['nav__outter-wrapper']" >
          <ul :class="styl['nav__outter-wrapper__menu']">
            <li v-for="(link, index) in linksStore.links" :key="index" :class="styl['nav__outter-wrapper__menu-item']">
              <NuxtLink :to="link.path" :class="styl['nav__outter-wrapper__menu-item__address']"> <p >{{ link.name }}</p> </NuxtLink>
            </li>
          </ul>
          <ul :class="styl['nav__outter-wrapper__media']">
            <li v-for="(item, key) in socialStore.socials" :key="key" :class="[styl['nav__outter-wrappper__media-item'], styl['nav__outter-wrappper__media-item--acitve']]">
              <NuxtLink :to="item.url">
                <NuxtImg :src="item.icon" :alt="item.name" width="24" height="24" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </nav>
</template>

<style lang="stylus" module="styl">
  .container
    outline: 1px solid
  .nav
    position: fixed
    padding: 20px 40px
    background-color: var(--black)
    width 100%
    &__outter
      width: 100%
      display: flex
      justify-content: space-between
      align-items: center  
      &-logo
        height: 80px
      &-wrapper
        display: flex
        flex-flow: row nowrap
        gap: 20px
        &__menu
          list-style: none
          display: flex
          gap: 20px
          text-decoration: none
          &-item
            text-decoration: none
            &__address
              color: var(--light-grey)
              font-size: 20px
              font-weight: var(--primary-bold)
              text-decoration: none
              text-transform: uppercase
              cursor: pointer
              &:hover
                color: var(--primary-color)
        &__media
          list-style: none
          display: flex
          gap: 15px
          &-item
            &--acitve
              cursor: pointer 

            

</style>
    