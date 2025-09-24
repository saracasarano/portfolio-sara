<template>
  <div
    class="modal fade"
    id="dettagliModal"
    tabindex="-1"
    aria-labelledby="dettagliModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-bordeaux" id="dettagliModalLabel">
            {{ prodotto.titolo }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p><strong>Descrizione:</strong> {{ prodotto.descrizione }}</p>
          <p><strong>Tipo:</strong> {{ prodotto.tipo }}</p>
          <p><strong>Data creazione:</strong> {{ prodotto.data }}</p>
          <p class="fw-bold text-bordeaux">Prezzo: €{{ prodotto.prezzo }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-bordeaux"
            @click="$emit('add', prodotto)"
          >
            Aggiungi al Carrello 🛒
          </button>
          <button
            type="button"
            class="btn btn-outline-bordeaux"
            data-bs-dismiss="modal"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailModal",
  props: {
    prodotto: {
      type: Object,
      required: true,
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

.btn-bordeaux {
  background-color: var(--bordeaux);
  border: 2px solid var(--cream);
  color: var(--cream);
  font-weight: 600;
}
.btn-bordeaux:hover {
  background-color: #a13c5f;
  border-color: var(--cream);
  color: var(--cream);
}

.btn-outline-bordeaux {
  background-color: transparent;
  border: 2px solid var(--bordeaux);
  color: var(--bordeaux);
  font-weight: 600;
}
.btn-outline-bordeaux:hover {
  background-color: var(--bordeaux);
  color: var(--cream);
}
</style>
