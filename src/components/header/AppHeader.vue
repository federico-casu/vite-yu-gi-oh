
<script>
// Js componente
export default {
    name: 'AppHeader',
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
    <header>

        <div class="container d-flex">
            <figure>
                <img width="200" src="../../assets/img/Yugioh_anime_logo.webp" alt="yu-gi-oh">
            </figure>
            <h1>Yu-Gi-Oh Api</h1>
        </div>

    </header>
</template>


<style lang="scss" scoped>
/* stile del componente */

@use '../../assets/styles/general.scss' as *;

div.container {
    align-items: center;
    gap: 20px;
    // border: 1px solid red;
    padding: 20px 0;
}
</style>