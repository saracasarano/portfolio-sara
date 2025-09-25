<template>
  <div class="container my-5">
    <h1 class="text-bordeaux text-center mb-5">Il tuo carrello</h1>

    <div v-if="carrello.length">
      <ul class="list-group mb-3">
        <li
          v-for="item in carrello"
          :key="item.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>{{ item.titolo }} (x{{ item.quantità }})</div>

          <div class="d-flex align-items-center">
            <span class="fw-bold me-3">
              €{{
                (item.prezzo * item.quantità).toLocaleString("it-IT", {
                  minimumFractionDigits: 2,
                })
              }}
            </span>
            <!-- Pulsante per rimuovere il singolo prodotto -->
            <button
              class="btn btn-rimuovi btn-sm"
              @click="RIMUOVI_DAL_CARRELLO(item.id)"
            >
              ❌ Rimuovi
            </button>
          </div>
        </li>
      </ul>

      <!-- Svuota tutto il carrello -->
      <button @click="SVUOTA_CARRELLO" class="btn btn-bordeaux">
        Svuota carrello
      </button>
    </div>

    <p v-else class="text-center text-bordeaux mt-5">Il carrello è vuoto</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CarrelloView",
  computed: {
    ...mapState(["carrello"]),
  },
  methods: {
    ...mapMutations(["SVUOTA_CARRELLO", "RIMUOVI_DAL_CARRELLO"]),
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

.btn-bordeaux {
  background-color: var(--bordeaux);
  border: 2px solid var(--cream);
  color: var(--cream);
  font-weight: 600;
}
.btn-bordeaux:hover {
  background-color: var(--cream);
  border-color: var(--bordeaux);
  color: var(--bordeaux);
}

.btn-rimuovi {
  background-color: var(--cream);
  border: 2px solid var(--bordeaux);
  color: var(--bordeaux);
  font-weight: 600;
}

.btn-rimuovi:hover {
  background-color: var(--bordeaux);
  border-color: var(--cream);
  color: var(--cream);
}
</style>
