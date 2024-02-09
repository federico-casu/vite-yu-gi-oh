


<script>
// Js componente
export default {
    name: 'AppMain',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>


<template>
    <!-- html componente -->

    <div class="d-flex">
        <div class="container d-flex">
            <div v-for="element in 5" class="card">
                <figure>
                    <img src="" alt="">
                </figure>
                <h3>Nome carta</h3>
                <span>Tipo</span>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
/* stile del componente */

@use '../../assets/styles/partials/variables' as *;

div {
    align-items: center;
    background-color: $bg-orange;
    // border: 1px solid blue;

    .container {
        background-color: white;
        border: 1px solid red;
        height: 90%;
        padding: 10px;

        flex-wrap: wrap;
        gap: 20px;

        .card {
            flex-basis: calc(100% / 5 - (80px / 5));
            border: 1px dashed black;
        }
    }

}
</style>