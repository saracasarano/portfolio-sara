<template>
  <div class="container my-5">
    <h1 class="text-bordeaux text-center mb-4">Forum</h1>
    <p class="text-center lead text-bordeaux">
      Condividi idee, domande e suggerimenti!
    </p>

    <!-- lista dei post -->
    <div class="forum-post mb-4" v-for="(post, index) in posts" :key="index">
      <h5 class="post-title">{{ post.titolo }}</h5>
      <p class="post-content">{{ post.contenuto }}</p>
      <p class="mb-1">
        <small class="text-cream">
          Pubblicato da <strong>{{ post.autore }}</strong> il {{ post.data }}
        </small>
      </p>

      <!-- risposte al post -->
      <div class="replies mt-3">
        <h6 class="text-cream">Risposte:</h6>
        <div
          class="reply mb-2"
          v-for="(reply, rIndex) in post.risposte"
          :key="rIndex"
        >
          <p class="mb-0">{{ reply.testo }}</p>
          <small class="text-cream">
            di <strong>{{ reply.autore }}</strong> - {{ reply.data }}
          </small>
        </div>

        <!-- form per rispondere -->
        <form @submit.prevent="aggiungiRisposta(index)" class="mt-2">
          <div class="mb-2">
            <input
              v-model="nuoviAutori[index]"
              type="text"
              class="form-control"
              placeholder="Il tuo nome"
              required
            />
          </div>
          <div class="input-group">
            <input
              v-model="nuoveRisposte[index]"
              type="text"
              class="form-control"
              placeholder="Scrivi una risposta..."
              required
            />
            <button type="submit" class="btn btn-bordeaux">Rispondi</button>
          </div>
        </form>
      </div>
    </div>

    <!-- form per aggiungere nuovo post -->
    <form @submit.prevent="aggiungiPost" class="mt-4">
      <div class="mb-3">
        <label class="form-label text-bordeaux">Il tuo nome</label>
        <input
          v-model="nuovoAutore"
          type="text"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label class="form-label text-bordeaux">Titolo</label>
        <input
          v-model="nuovoTitolo"
          type="text"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label class="form-label text-bordeaux">Contenuto</label>
        <textarea
          v-model="nuovoContenuto"
          class="form-control"
          rows="3"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-bordeaux">Pubblica</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ForumView",
  data() {
    return {
      // array base di partenza
      basePosts: [
        {
          titolo: "Benvenuti nel forum!",
          contenuto: "Scrivete le vostre idee qui.",
          autore: "Admin",
          data: "23/09/2025",
          risposte: [
            {
              testo: "Ciao! Che bella idea!",
              autore: "Mario",
              data: "23/09/2025",
            },
          ],
        },
      ],
      posts: [], // lo popolo in mounted
      nuoveRisposte: {},
      nuoviAutori: {},
      nuovoTitolo: "",
      nuovoContenuto: "",
      nuovoAutore: "",
    };
  },
  mounted() {
    // recupero i post salvati
    const salvati = localStorage.getItem("forumPosts");
    if (salvati) {
      this.posts = JSON.parse(salvati);
    } else {
      // se non esiste salvo l’array base
      this.posts = this.basePosts;
      localStorage.setItem("forumPosts", JSON.stringify(this.posts));
    }
  },
  watch: {
    posts: {
      deep: true,
      handler(nuovi) {
        localStorage.setItem("forumPosts", JSON.stringify(nuovi));
      },
    },
  },
  methods: {
    aggiungiPost() {
      if (this.nuovoTitolo && this.nuovoContenuto && this.nuovoAutore) {
        const oggi = new Date().toLocaleDateString("it-IT");
        this.posts.unshift({
          titolo: this.nuovoTitolo,
          contenuto: this.nuovoContenuto,
          autore: this.nuovoAutore,
          data: oggi,
          risposte: [],
        });
        this.nuovoTitolo = "";
        this.nuovoContenuto = "";
        this.nuovoAutore = "";
      }
    },
    aggiungiRisposta(index) {
      const testo = this.nuoveRisposte[index];
      const autore = this.nuoviAutori[index];
      if (testo && autore) {
        const oggi = new Date().toLocaleDateString("it-IT");
        this.posts[index].risposte.push({
          testo,
          autore,
          data: oggi,
        });
        this.nuoveRisposte[index] = "";
        this.nuoviAutori[index] = "";
      }
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
.text-cream {
  color: var(--cream);
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

.forum-post {
  background-color: var(--bordeaux);
  color: var(--cream);
  padding: 20px;
  border-radius: 10px;
}
.post-title {
  font-weight: 700;
  margin-bottom: 5px;
  color: var(--cream);
}
.post-content {
  margin: 0 0 10px 0;
  color: var(--cream);
}

.replies {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 8px;
}
.reply {
  color: var(--cream);
  font-size: 0.95rem;
  padding-left: 5px;
  border-left: 2px solid var(--cream);
}
</style>
