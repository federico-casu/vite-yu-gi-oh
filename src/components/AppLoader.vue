


<script>
import { store } from '../store'

    // Js componente
    export default {
        name: 'AppLoader',
        data() {
            return {
                message: 'Loading cards'
            }
        },
        methods: {
            loading() {
                let clock = setInterval( () => {
                    if (!this.message.includes('...')) {
                        this.message += '.'
                    } else {
                        this.message = 'Loading cards'
                    }
                }, 250)
            }
        },
        mounted() {
            this.loading()
        }
    }
</script>


<template>
    <!-- html componente -->

    <div class="container">
        <h1>{{message}}</h1>
    </div>
    
</template>


<style lang="scss" scoped>
    /* stile del componente */
    
    @use '../assets/styles/general.scss' as *;
    @use '../assets/styles/partials/variables' as *;

    div.container {
        background-color: white;

        h1 {
            background-color: $bg-dark;
            color: white;
            padding: 1rem;
        }
    }
    
</style>