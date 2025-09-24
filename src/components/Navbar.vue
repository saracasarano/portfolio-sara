<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <!-- Brand: logo cliccabile -->
      <router-link class="navbar-brand" to="/">
        <img
          src="@/assets/logo.png"
          alt="Logo Sara Casarano"
          class="logo-nav"
        />
      </router-link>

      <!-- Bottone per il menu mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Link di navigazione -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/grafiche">
              Le mie grafiche
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/progetti">
              I miei progetti
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contatti">Contatti</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/forum">Forum</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/carrello">
              Carrello ({{ $store.getters.carrelloCount }})
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped>
:root {
  --cream-dark: #e6d9c8; /* crema scuro */
  --bordeaux: #812843;
}

/* sfondo crema scuro alla navbar */
.bg-cream-dark {
  background-color: var(--cream-dark) !important;
}

/* logo nella navbar */
.logo-nav {
  height: 50px;
  width: auto;
  display: block;
}

/* link della navbar su sfondo crema */
.navbar .nav-link {
  color: var(--bordeaux) !important;
  font-weight: 600;
}
.navbar .nav-link:hover {
  color: #a13c5f !important; /* bordeaux più chiaro */
}
</style>
