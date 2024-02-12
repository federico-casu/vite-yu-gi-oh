


<script>
// Js componente

import { store } from '../../store';
import Card from './Card.vue';
import axios from 'axios';
import AppLoader from '../AppLoader.vue';

export default {
    name: 'AppMain',
    components: {
        Card,
        AppLoader
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getCards(archetype) {
            // console.log(`${store.apiUrl}?archetype=${archetype}`)

            store.cards = []

            if (!store.cards) {
                store.loading = true;
            } else {
                store.loading = false;
            }

            setTimeout( () => {
                axios.get(`${store.apiUrl}?archetype=${archetype}`).then(res => {
                    store.cards = res.data.data;
                })
            }, 2000);

        },
        convertCardType(archetype) {
            // console.log(type.replace(/ /g, '%20').toLowerCase())
            return archetype.replace(/ /g, '%20').toLowerCase();
        }
    },
    mounted() {
        // this.getCards(store.apiUrl);
        this.getCards(this.convertCardType('-Eyes Dragon'))
    }
}
</script>


<template>
    <!-- html componente -->

    <main class="d-flex">

        <div class="container">
            <select v-model="store.currentType" @change="getCards(convertCardType(store.currentType))" name="filter" id="filter">
                <option 
                v-for="(archetype, index) in store.cardTypes" 
                :key="index"
                :value="archetype.archetype_name"
                >{{ archetype.archetype_name }}</option>
            </select>
        </div>

        

        <div id="card-container" class="container d-flex">

            <AppLoader v-if="store.cards.length === 0" />
            <h3 v-else>Found {{ store.cards.length }} cards</h3>

            <Card 
            v-for="(card, index) in store.cards" :key="index" 
            :propsImg="card.card_images[0].image_url_small"
            :propsName="card.name"
            :propsArchetype="card.archetype"/>
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
        // border: 1px solid red;
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