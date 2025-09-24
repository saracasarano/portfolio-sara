<template>
  <footer class="footer-custom bg-light text-center py-3">
    © 2025 Sara Casarano – Tutti i diritti riservati
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
:root {
  --bordeaux: #812843;
  --cream: #f7efe7;
}

/* sfondo crema + testo bordeaux */
.footer-custom {
  background-color: var(--cream);
  color: var(--bordeaux);
  font-weight: 600; /* se vuoi più “bold” */
}
</style>
