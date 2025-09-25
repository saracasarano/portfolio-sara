<template>
  <div class="container my-5">
    <h1 class="text-bordeaux text-center mb-4">
      Contattami per il tuo progetto
    </h1>
    <p class="text-center lead">
      Compila il modulo qui sotto per richiedere un preventivo personalizzato.
    </p>

    <form @submit.prevent="inviaForm" class="contact-form mx-auto">
      <!-- Tipo di progetto -->
      <div class="mb-3">
        <label for="tipo" class="form-label">Tipo di progetto</label>
        <select id="tipo" v-model="form.tipo" class="form-select" required>
          <option value="" disabled>Seleziona un tipo di progetto</option>
          <option>Logo Design</option>
          <option>Brand Identity</option>
          <option>Packaging Design</option>
          <option>UI/UX Design</option>
          <option>Font Personalizzato</option>
          <option>Altro</option>
        </select>
      </div>

      <!-- Budget -->
      <div class="mb-3">
        <label for="budget" class="form-label">Budget indicativo (€)</label>
        <input
          type="number"
          id="budget"
          v-model="form.budget"
          class="form-control"
          placeholder="Es. 500"
          required
        />
      </div>

      <!-- Descrizione -->
      <div class="mb-3">
        <label for="descrizione" class="form-label"
          >Descrizione del progetto</label
        >
        <textarea
          id="descrizione"
          v-model="form.descrizione"
          class="form-control"
          rows="5"
          placeholder="Scrivi i dettagli del progetto..."
          required
        ></textarea>
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">La tua email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="form-control"
          placeholder="nome@email.com"
          required
        />
      </div>

      <!-- Bottone -->
      <button type="submit" class="btn btn-bordeaux w-100">
        Invia richiesta ✉️
      </button>
    </form>

    <!-- Messaggio di successo -->
    <div
      v-if="successo"
      class="alert alert-success mt-4 text-center"
      role="alert"
    >
      ✅ La tua richiesta è stata inviata con successo! Ti risponderò al più
      presto.
    </div>
  </div>
</template>

<script>
export default {
  name: "ContattiView",
  data() {
    return {
      form: {
        tipo: "",
        budget: "",
        descrizione: "",
        email: "",
      },
      successo: false,
    };
  },
  methods: {
    inviaForm() {
      // Qui puoi gestire l'invio del form (API, email, ecc.)
      // Per ora solo un messaggio di successo
      this.successo = true;

      // Resetta i campi del form
      this.form = {
        tipo: "",
        budget: "",
        descrizione: "",
        email: "",
      };

      // Nasconde il messaggio dopo 5 secondi
      setTimeout(() => (this.successo = false), 5000);
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

.contact-form {
  max-width: 600px;
}

.form-control,
.form-select {
  border: 2px solid var(--bordeaux);
  background-color: var(--cream);
  color: var(--bordeaux);
  font-weight: 500;
}
.form-control:focus,
.form-select:focus {
  box-shadow: 0 0 0 0.25rem rgba(129, 40, 67, 0.25);
  border-color: var(--bordeaux);
}

.btn-bordeaux {
  background-color: var(--bordeaux);
  border: 2px solid var(--cream);
  color: var(--cream);
  font-weight: 600;
}
.btn-bordeaux:hover {
  background-color: #a13c5f;
  color: var(--cream);
}
</style>
