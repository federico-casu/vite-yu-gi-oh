


<script>
    // Js componente
    export default {
        name: 'Card',
        data() {
            return {
                
            }
        },
        props: {
            propsImg: String,
            propsName: String,
            propsArchetype: String
        },
        methods: {
            
        }
    }
</script>


<template>
    <!-- html componente -->

    <div class="card">
        <figure>
            <img :src="propsImg" :alt="propsName">
        </figure>
        <div class="info d-flex">
            <h4>{{ propsName }}</h4>
            <span>{{ propsArchetype }}</span>
        </div>
    </div>
    
</template>


<style lang="scss" scoped>
    /* stile del componente */

    @use '../../assets/styles/partials/variables' as *;

    .card {
        flex-basis: calc(100% / 5 - (80px / 5));
        max-width: calc(100% / 5 - (80px / 5));
        // border: 1px dashed black;
        min-height: 280px;
        background-color: $bg-orange;

        figure {
            img {
                width: 100%;
            }
        }

        div.info {
            flex-direction: column;
            text-align: center;
            gap: 10px;
            
            padding: 10px 5px;
        }
    }
    
</style>