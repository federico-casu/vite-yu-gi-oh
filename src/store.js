
// importo con il destructuring il metodo reactive da vue
import { reactive } from "vue";

// creo un oggetto "reattivo" (scambio dati bidirezionale) e definisco al suo interno le chiavi di cui necessito 
export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&attribute=dark',
    cards: [],
    loading: false
})