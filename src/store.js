
// importo con il destructuring il metodo reactive da vue
import { reactive } from "vue";

// creo un oggetto "reattivo" (scambio dati bidirezionale) e definisco al suo interno le chiavi di cui necessito 
export const store = reactive({
    apiUrl: '',
    cards: [],
    loading: false
})