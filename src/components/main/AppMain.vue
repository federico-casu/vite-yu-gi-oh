


<script>
// Js componente

import { store } from '../../store';
import Card from './Card.vue';

export default {
    name: 'AppMain',
    components: {
        Card
    },
    data() {
        return {
            store
        }
    },
    methods: {
        
    }
}
</script>


<template>
    <!-- html componente -->

    <main class="d-flex">
        <div class="container d-flex">
            <Card 
            v-for="(card, index) in store.cards" :key="index" 
            :propsImg="card.card_images[0].image_url_small"
            :propsName="card.name"
            :propsRace="card.race"/>
        </div>
    </main>
</template>


<style lang="scss" scoped>
/* stile del componente */

@use '../../assets/styles/partials/variables' as *;

main {
    align-items: center;
    background-color: $bg-orange;
    padding: 50px 0;
    // border: 1px solid blue;

    .container {
        background-color: white;
        border: 1px solid red;
        height: 90%;
        padding: 10px;

        flex-wrap: wrap;
        gap: 20px;
    }

}
</style>