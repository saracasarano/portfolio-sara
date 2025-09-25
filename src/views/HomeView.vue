<template>
  <div class="container my-5">
    <!-- Hero section -->
    <div class="row align-items-center">
      <!-- Testo -->
      <div class="col-md-6 order-2 order-md-1 text-center text-md-start">
        <h1 class="display-4 text-bordeaux">Sara Casarano</h1>
        <p class="lead">
          Creo esperienze visive uniche attraverso un design moderno e
          funzionale.
        </p>
        <router-link to="/progetti" class="btn btn-bordeaux mt-3">
          Let's get started →
        </router-link>
      </div>

      <!-- Foto -->
      <div class="col-md-6 order-1 order-md-2 text-center">
        <img
          src="@/assets/foto_personale.jpeg"
          alt="Foto di Sara Casarano"
          class="profile-img"
        />
      </div>
    </div>

    <!-- Sezione Chi sono -->
    <section class="about-me text-center mt-5">
      <h2 class="text-bordeaux mb-4">Chi sono</h2>
      <p class="px-md-5">
        Ciao! Mi chiamo Sara e sono una designer appassionata di visual
        branding, UI/UX e creatività digitale. Il mio lavoro combina estetica e
        funzionalità, per creare esperienze visive autentiche e memorabili.
      </p>
    </section>

    <!-- Skills -->
    <section class="skills text-center mt-5">
      <h2 class="text-bordeaux mb-4">Skills Visive</h2>
      <div class="row">
        <div
          class="col-6 col-md-4 mb-3"
          v-for="skill in skills"
          :key="skill.nome"
        >
          <div class="card h-100 shadow-sm rounded-5 skill-card">
            <div class="card-body">
              <i :data-lucide="skill.icona"></i>
              <div class="mt-2 fw-bold">{{ skill.nome }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      skills: [
        { icona: "pen-tool", nome: "Adobe Illustrator" },
        { icona: "layout-dashboard", nome: "Figma" },
        { icona: "badge-percent", nome: "Brand Identity" },
        { icona: "monitor-smartphone", nome: "UI/UX Design" },
        { icona: "type", nome: "Tipografia" },
        { icona: "package", nome: "Packaging Design" },
      ],
    };
  },
  mounted() {
    if (window.lucide) window.lucide.createIcons();
  },
};
</script>

<style>
:root {
  --bordeaux: #812843;
  --cream: #f7efe7;
}

.text-bordeaux {
  color: var(--bordeaux) !important;
}

.btn-bordeaux {
  display: inline-block;
  background-color: var(--bordeaux) !important;
  border: 2px solid var(--cream) !important;
  color: var(--cream) !important;
  font-weight: 600;
}
.btn-bordeaux:hover {
  background-color: #a13c5f !important;
  border-color: var(--cream) !important;
  color: var(--cream) !important;
}

.about-me p {
  font-family: "Playfair Display", serif;
  font-size: 20px;
  max-width: 700px;
  margin: 0 auto;
  color: var(--bordeaux);
}

h1,
h2,
.lead {
  color: var(--bordeaux);
  font-family: "Playfair Display", serif;
}

.profile-img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease, box-shadow 0.4s ease;
  display: block;
  margin: 0 auto; /* centrata di default (mobile) */
}
.profile-img:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

/* su desktop l’immagine resta a destra per via delle colonne order */
@media (max-width: 768px) {
  .profile-img {
    width: 180px;
    height: 180px;
  }
}

/* 🔹 Card skills */
.card {
  border: 2px solid var(--bordeaux);
}
.card-body {
  background-color: var(--bordeaux);
  color: #f7efe7;
  border-radius: 20px;
}
.card-body .fw-bold {
  color: #f7efe7;
}

/* icone più piccole su mobile */
.card-body i {
  color: #f7efe7;
  font-size: 1.5rem; /* mobile-first */
}
@media (min-width: 768px) {
  .card-body i {
    font-size: 2rem; /* desktop */
  }
}
</style>
