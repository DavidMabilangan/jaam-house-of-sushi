<script setup>


const description = computed(() =>({
    title: 'LEARN ABOYT US MORE',
    description: "Here at Jaam, you'll find a distinctly unique dining experience! We are committed to bringing you the taste of Japan. All of our food preparation procedures must meet rigorous requirements which ensure that we offer top quality products made by our highly skilled chefs."
}))

</script>


<template>
    <section :class="styl['about-us']">
        <div class="container" :class="styl['about-us__wrapper']">
            <NuxtImg
                    src="/about-image.webp"
                    alt="About Us Image"
                    :class="styl['about-us__wrapper-img']"
                />
            <div :class="styl['about-us__wrapper-details']">
                <h2 :class="styl['about-us__wrapper-details__title']">{{ description.title }}</h2>
                <h3 :class="styl['about-us__wrapper-details__sub-title']">{{  description.description }}</h3>
                <NuxtLink to="/about-us">
                    <button :class="styl['about-us__wrapper-details__button']">About Us</button>
                </NuxtLink>
            </div>
        
        </div>
    </section>
</template>

<style lang="stylus" module="styl">
    .about-us
        padding: 100px 0
        &__wrapper
            display:flex
            flex-flow: row wrap
            align-items: center
            justify-content: space-between
            gap: 40px
            &-img, &-details
                flex: 0 0 calc(50% - 40px)
            &-img
                border-radius: 20px
            &-details
                display: flex
                flex-flow: column nowrap
                justify-content: center
                &__title, &__sub-title, &__button
                    color: var(--secondary-color)
                &__title
                    font-size: 40px
                    font-weight: var(--bold)
                    margin-bottom: 10px
                &__sub-title
                    font-size: 20px
                    margin-bottom: 20px
                    font-weight: var(--normal)
                &__button
                    padding: 15px 30px
                    border: 1px solid var(--secondary-color)
                    border-radius: 10px
                    background-color: transparent
                    font-weight: var(--bold)
                    text-transform: uppercase
                    font-family: var(--secondary-font)
                    cursor: pointer
                    &:hover
                        background-color: var(--secondary-color)
                        color: var(--white)



</style>