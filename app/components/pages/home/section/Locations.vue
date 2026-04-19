<script setup>
    import {useAddress} from '~/stores/address'
    const headings = computed(() => ({
        header: 'Ready to dine-in?',
        sub_header: 'check the nearest JAAM Store near you'
    }))
    
    const address = useAddress()
</script>



<template>
    <section :class="styl['locations']">
        <div class="container">
            <div :class="styl['locations__wrapper']">
                <div :class="styl['locations__wrapper-left']">
                    <h2>Locations</h2>
                     <ul>
                        <li v-for="(item, key) in address.store_address" :key=key>
                            <p>{{ item.location }}</p>
                            <p>{{ item.address }}</p>
                            <p>{{ item.contact }}</p>
                            <p>{{ item.schedule }}</p>
                            <p>{{ item.note }}</p>
                            <p>{{ item.transactions }}</p>
                        </li>
                     </ul>   
                </div>
                <div :class="styl['locations__wrapper-right']">
                    <h2 :class="styl['locations__wrapper-right__header']"> {{ headings.header }}</h2>
                    <h3 :class="styl['locations__wrapper-right__sub-header']">{{ headings.sub_header }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="stylus" module="styl">
    .locations
        &__wrapper
            display:flex
            flex-flow: row wrap
            &-left, &-right 
                flex 0 0 50%
                padding: 50px 0
            &-right
                display: flex
                align-items: center
                justify-content: center
                flex-flow: column nowrap
                background-image: url('/location.webp')
                background-size: cover
                background-repeat: no-repeat
                box-shadow: inset 0 0 0 1000px rgba(239, 93, 21, 0.6);
                &__header, &__sub-header
                    color: var(--white)
                &__header
                    font-size: 40px
                    font-weight: var(--bold)
                &__sub-header
                    font-size: 20px
                    font-weight: var(--semi-bold)
</style>
