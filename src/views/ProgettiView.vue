<template>
  <div class="container my-5">
    <h1 class="text-bordeaux text-center mb-4">I miei progetti</h1>
    <p class="text-center lead">
      In questo carosello sono presenti alcuni dei miei ultimi progetti.
    </p>

    <!-- Carosello Bootstrap -->
    <div id="carouselProgetti" class="carousel slide my-4 carousel-wrapper">
      <div class="carousel-indicators">
        <button
          v-for="(slide, idx) in slides"
          :key="idx"
          type="button"
          data-bs-target="#carouselProgetti"
          :data-bs-slide-to="idx"
          :class="{ active: idx === 0 }"
          aria-current="true"
          :aria-label="'Slide ' + (idx + 1)"
        ></button>
      </div>

      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: idx === 0 }"
          v-for="(slide, idx) in slides"
          :key="slide.src"
        >
          <img :src="slide.src" class="d-block w-100" :alt="slide.alt" />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselProgetti"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Precedente</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselProgetti"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Successivo</span>
      </button>
    </div>

    <!-- Box sotto al carosello -->
    <div class="project-info mt-3 text-center">
      <h5 class="text-bordeaux">{{ slideAttivo.titolo }}</h5>
      <button
        class="btn btn-outline-bordeaux mt-2"
        data-bs-toggle="modal"
        data-bs-target="#modalDettagli"
      >
        Dettagli!
      </button>
    </div>

    <!-- Modale Dettagli -->
    <div class="modal fade" id="modalDettagli" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-bordeaux">
              {{ slideAttivo.titolo }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <p class="mb-2">{{ slideAttivo.descrizione }}</p>
            <p><strong>Data:</strong> {{ slideAttivo.data }}</p>
            <p>
              <strong>Tempo di realizzazione:</strong> {{ slideAttivo.tempo }}
            </p>

            <div v-if="slideAttivo.features && slideAttivo.features.length">
              <strong>Funzionalità principali:</strong>
              <ul>
                <li v-for="(feat, i) in slideAttivo.features" :key="i">
                  {{ feat }}
                </li>
              </ul>
            </div>

            <div v-if="slideAttivo.tecnologie && slideAttivo.tecnologie.length">
              <strong>Tecnologie usate:</strong>
              <ul>
                <li v-for="(tech, i) in slideAttivo.tecnologie" :key="i">
                  {{ tech }}
                </li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
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

    <aside class="ispirazioni mt-5">
      <h3>Fonti d'ispirazione</h3>
      <ul>
        <li>
          <a href="https://eyeondesign.aiga.org/" target="_blank"
            >AIGA Eye on Design</a
          >
        </li>
        <li>
          <a href="https://www.creativebloq.com/" target="_blank"
            >Creative Bloq</a
          >
        </li>
        <li>
          <a href="https://dribbble.com/" target="_blank">Dribbble</a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: "ProgettiView",
  data() {
    return {
      slides: [
        {
          src: require("@/assets/moodtrack.png"),
          alt: "Mood Track",
          titolo: "Mood Track",
          data: "24 giugno 2023",
          descrizione:
            "App per monitorare il tuo umore quotidiano e suggerire attività personalizzate con grafici interattivi.",
          tempo: "2 mesi",
          features: [
            "Tracciamento giornaliero dell’umore",
            "Report settimanali",
            "Suggerimenti personalizzati di attività",
          ],
          tecnologie: ["Vue 3", "Firebase", "Chart.js"],
        },
        {
          src: require("@/assets/fitmeal.png"),
          alt: "Fit Meal",
          titolo: "Fit Meal",
          data: "5 settembre 2024",
          descrizione:
            "Piattaforma per creare piani alimentari su misura, ricette salutari e monitoraggio calorie.",
          tempo: "3 mesi",
          features: [
            "Creazione automatica di piani alimentari",
            "Database di ricette healthy",
            "Controllo macro-nutrienti",
          ],
          tecnologie: ["Nuxt", "Node.js", "MongoDB"],
        },
        {
          src: require("@/assets/artifycollab.png"),
          alt: "Artify Collab",
          titolo: "Artify Collab",
          data: "4 febbraio 2025",
          descrizione:
            "Community per collaborare su progetti artistici con AI generativa e condividere risorse.",
          tempo: "4 mesi",
          features: [
            "Spazio collaborativo per progetti artistici",
            "Generazione immagini AI",
            "Marketplace integrato",
          ],
          tecnologie: ["React", "OpenAI API", "AWS"],
        },
      ],
      indexAttivo: 0,
    };
  },
  computed: {
    slideAttivo() {
      return this.slides[this.indexAttivo] || {};
    },
  },
  mounted() {
    const el = document.getElementById("carouselProgetti");
    if (el)
      el.addEventListener("slid.bs.carousel", (e) => {
        this.indexAttivo = e.to;
      });
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

.carousel-wrapper {
  max-width: 700px;
  margin: 0 auto;
  border: 3px solid var(--bordeaux);
  border-radius: 10px;
}
.carousel-wrapper .carousel-item img {
  width: 100%;
  height: 400px;
  object-fit: contain;
  background-color: var(--cream);
  border-radius: 10px;
}

@media (max-width: 768px) {
  .carousel-wrapper {
    max-width: 95%;
  }
  .carousel-wrapper .carousel-item img {
    height: auto;
  }
}

/* box sotto al carosello */
.project-info h5 {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 30px;
}
.project-info p {
  color: var(--bordeaux);
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

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: var(--bordeaux);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-size: 60%;
  filter: invert(1) brightness(2);
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}

.ispirazioni {
  background-color: var(--bordeaux);
  color: var(--cream);
  width: 80%;
  margin: 0 auto;
  padding: 30px;
  border: solid var(--bordeaux);
  border-radius: 10px;
  text-align: center;
}
.ispirazioni ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.ispirazioni li {
  margin: 10px 0;
}
.ispirazioni a {
  color: var(--cream);
  text-decoration: none;
  font-size: 18px;
  display: inline-block;
  transition: transform 0.3s ease;
}
.ispirazioni a:hover {
  color: black;
  transform: scale(1.1);
}
</style>
