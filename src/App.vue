<template>
  <div class="app-wrapper">
    <!-- Navbar sempre in alto -->
    <AppNavbar />

    <!-- Contenuto dinamico (cresce) -->
    <div class="page-content">
      <router-view />
    </div>

    <!-- Footer sempre in basso -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from "./components/Navbar.vue";
import AppFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style>
:root {
  --cream: #f7efe7;
}

/* wrapper flessibile a colonna */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* altezza intera viewport */
  background-color: var(--cream);
  margin: 0;
}

/* questa sezione occupa tutto lo spazio disponibile
   e spinge il footer in basso */
.page-content {
  flex: 1;
}

/* reset body */
body {
  margin: 0;
  background-color: var(--cream);
}
</style>
