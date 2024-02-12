
<!-- 

  Descrizione:
  Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.

  Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php
  e con i dati restituiti, stampate una card per ogni carta.

  ATTENZIONE: l’api restituisce tutti i risultati in un colpo solo. Per evitare attese e/o rallentamenti nelle richieste, potete diminuire il numero di risultati sfruttando i parametri *num* e *offset*
  https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0

  Bonus:
  Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.
  Documentazione: https://ygoprodeck.com/api-guide/

-->


<script>

import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import AppLoader from './components/AppLoader.vue';
import axios from 'axios';

// importo con il destructuring l'oggetto reattivo store dal file store.js
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain,
    AppLoader
  },
  data() {
    return {
      // dichiaro store nei data per poterlo utilizzare
      store
    }
  },
  methods: {
    
    getCardTypes() {
      // axios.get(store.apiUrlAll).then(res => {
      //   res.data.data.forEach(element => {
      //     if (!store.cardTypes.includes(element.type)) {
      //       store.cardTypes.push(element.type);
      //     }
      //   });
      // })

      axios.get(store.apiUrlArchetypes).then( res => {
        store.cardTypes = res.data;

        // console.log(res.data)
      })
    }
  },
  mounted() {
    this.getCardTypes();
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './assets/styles/general.scss' as *;
@use './assets/styles/partials/mixins.scss' as *;
@use './assets/styles/partials/variables.scss' as *;
</style>
