


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

        <div class="container">
            <select name="filter" id="filter">
                <option value="">Alien</option>
            </select>
        </div>

        <div id="card-container" class="container d-flex">

            <h3>Found {{ store.cards.length }} cards</h3>

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $bg-orange;
    padding: 30px 0;
    gap: 30px;
    // border: 1px solid blue;

    > div:first-child {
        align-self: start;
        padding-left: 10px;

        select {
            padding: 10px 20px;
            font-size: 1.2rem;
            border-radius: 10px;
        }
    }

    #card-container {
        background-color: white;
        border: 1px solid red;
        height: 90%;
        padding: 30px 20px;

        flex-wrap: wrap;
        gap: 20px;

        h3 {
            width: 100%;
            background-color: $bg-dark;
            color: white;
            padding: 20px 10px;
        }
    }

}
</style>