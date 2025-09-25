<template>
  <div class="container my-5">
    <h1 class="text-bordeaux text-center mb-4">Le mie Grafiche & Font</h1>

    <!-- Campo di ricerca -->
    <div class="mb-4 text-center">
      <input
        v-model="query"
        type="text"
        class="form-control w-50 mx-auto"
        placeholder="Cerca grafica o font..."
      />
    </div>

    <!-- Lista card -->
    <div class="row">
      <div
        class="col-6 col-md-4 col-lg-3 mb-4"
        v-for="item in risultatiFiltrati"
        :key="item.id"
      >
        <ProductCard
          :item="item"
          @add="aggiungiConNotifica"
          @details="apriDettagli"
        />
      </div>
    </div>

    <!-- Modale Dettagli -->
    <ProductDetailModal
      :prodotto="prodottoSelezionato"
      @add="aggiungiConNotifica"
    />

    <!-- Toast in basso a destra -->
    <div v-if="notifica" class="toast-custom">
      {{ notifica }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ProductCard from "@/components/ProductCard.vue";
import ProductDetailModal from "@/components/ProductDetailModal.vue";

export default {
  name: "GraficheView",
  components: {
    ProductCard,
    ProductDetailModal,
  },
  data() {
    return {
      prodottoSelezionato: {},
      query: "", // ricerca
      notifica: "", // messaggio toast
    };
  },
  computed: {
    ...mapState(["grafiche"]),
    risultatiFiltrati() {
      if (!this.query) return this.grafiche;
      return this.grafiche.filter((g) =>
        g.titolo.toLowerCase().includes(this.query.toLowerCase())
      );
    },
  },
  methods: {
    ...mapMutations(["AGGIUNGI_CARRELLO"]),
    apriDettagli(item) {
      this.prodottoSelezionato = item;
    },
    aggiungiConNotifica(item) {
      this.AGGIUNGI_CARRELLO(item);
      this.notifica = `✅ "${item.titolo}" è stato aggiunto al carrello!`;
      setTimeout(() => (this.notifica = ""), 3000);
    },
  },
};
</script>

<style scoped>
:root {
  --bordeaux: #812843;
  --cream: #f7efe7;
}

.text-bordeaux {
  color: var(--bordeaux);
}

input.form-control {
  border: 2px solid var(--bordeaux);
  color: var(--bordeaux);
}
input.form-control::placeholder {
  color: #b57c8c;
}

.toast-custom {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #28a745;
  color: var(--cream);
  padding: 12px 18px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  animation: fadeInOut 3s ease forwards;
}

/* animazione toast */
@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
