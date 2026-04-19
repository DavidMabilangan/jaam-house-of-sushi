
<script setup>
    const menu = computed(() => ({
        title: 'CHECKOUT OOUR MENU',
        menu:[
            {
                name: 'Donburi',
                image: '/donburi.webp',
                slug: '/menu/#donburi'
            },
            {
                name: 'Platter',
                image: '/platter.webp',
                slug: '/menu/#platter'      
            },
            {
                name: 'Sushi',
                image: '/sushi.webp',
                slug: '/menu/#sushi'
            }
        ]
    }))
</script>

<template>
    <section :class="styl['menu']">
        <div class="container">
            <h2 :class="styl['menu__title']">{{ menu.title }}</h2>
            <div :class="styl['menu__wrapper']">
                <ul :class="styl['menu__wrapper-list']">
                    <li :class="styl['menu__wrapper-list__item']" v-for="(item, key) in menu.menu" :key="key">
                        <NuxtImg :src="item.image" :alt="item.name" :class="styl['menu__wrapper-list__item-img']"/>
                        <h3 :class="styl['menu__wrapper-list__item-text']">{{ item.name }}</h3>
                    </li>
                </ul>
            </div>
            <NuxtLink to="/menu" :class="styl['menu__button']">Check our menu</NuxtLink>
        </div>
    </section>
</template>

<style lang="stylus" module="styl">
    .menu
        padding: 100px 0
        background-color: var(--light-orange)
        text-align: center
        &__title
            margin-bottom: 50px
            font-size: 70px
            font-weight: var(--bold )
            color: var(--primary-color)
        &__wrapper
            display: flex
            flex-flow: row wrap
            justify-content: center
            margin-bottom: 30px
            &-list
                display: flex
                flex-flow: row wrap
                list-style: none
                margin: 0 -15px
                width: 100%
                &__item
                    flex: 0 0 calc(33.333% - 30px)
                    margin: 0 15px 30px
                    list-style: none
                    &-img
                        width: 100%
                        border-radius: 15px
                        margin-bottom: 15px
                    &-text
                        font-size: 20px
                        color: var(--primary-color)
                        font-weight: var(--bold
                        )
                        text-transform: uppercase
        &__button
            padding: 15px 30px
            border-radius: 10px
            background-color: transparent
            border: 1px solid var(--primary-color)
            cursor: pointer 
            font-size: 18px
            color: var(--primary-color)
            text-decoration: none  
            &:hover
                background-color: var(--primary-color)   
                color: var(--white)
</style>