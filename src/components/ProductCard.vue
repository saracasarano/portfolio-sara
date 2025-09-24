<template>
  <div class="card h-100 shadow-sm">
    <img :src="item.immagine" class="card-img-top" :alt="item.titolo" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title text-bordeaux">{{ item.titolo }}</h5>
      <p class="card-text fw-bold text-bordeaux">Prezzo: €{{ item.prezzo }}</p>
      <div class="mt-auto">
        <button @click="$emit('add', item)" class="btn btn-bordeaux w-100 mb-2">
          Aggiungi al Carrello 🛒
        </button>
        <button
          class="btn btn-outline-bordeaux w-100"
          @click="$emit('details', item)"
          data-bs-toggle="modal"
          data-bs-target="#dettagliModal"
        >
          Dettagli ℹ️
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    item: {
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

/* bottoni */
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

/* card */
.card {
  border: 2px solid var(--bordeaux);
}
.card-body {
  background-color: var(--cream);
  color: var(--bordeaux);
  border-radius: 15px;
}
.card-title {
  font-weight: 700;
}

/* immagine: altezza fissa + cover */
.card-img-top {
  width: 100%;
  height: 200px; /* altezza fissa */
  object-fit: cover; /* riempie senza deformarsi */
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

/* su tablet aumenta un po’ l’altezza */
@media (min-width: 992px) {
  .card-img-top {
    height: 250px;
  }
}

/* su desktop grandi ancora più alta */
@media (min-width: 1400px) {
  .card-img-top {
    height: 300px;
  }
}
</style>
