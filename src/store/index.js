import { createStore } from "vuex";

export default createStore({
  state: {
    grafiche: [
      {
        id: 1,
        titolo: "Logo minimal",
        prezzo: 40,
        disponibile: true,
        descrizione: "Logo in stile minimal perfetto per brand moderni.",
        tipo: "Grafica",
        data: "Gennaio 2025",
        immagine: require("@/assets/logo_minimal.png"),
      },
      {
        id: 2,
        titolo: "Poster vintage",
        prezzo: 15,
        disponibile: false,
        descrizione: "Poster con stile retrò anni 70.",
        tipo: "Grafica",
        data: "Febbraio 2025",
        immagine: require("@/assets/poster_vintage.png"),
      },
      {
        id: 3,
        titolo: "Font Elegance",
        prezzo: 10,
        disponibile: true,
        descrizione: "Font serif elegante per design sofisticati.",
        tipo: "Font",
        data: "Marzo 2025",
        immagine: require("@/assets/font_elegance.png"),
      },
      {
        id: 4,
        titolo: "Font Techno",
        prezzo: 12,
        disponibile: true,
        descrizione: "Font moderno futuristico per UI.",
        tipo: "Font",
        data: "Aprile 2025",
        immagine: require("@/assets/font_techno.png"),
      },

      // 🔹 nuovi elementi
      {
        id: 5,
        titolo: "Logo Nature",
        prezzo: 25,
        disponibile: true,
        descrizione:
          "Logo ispirato alla natura, con elementi organici e bordeaux.",
        tipo: "Grafica",
        data: "Maggio 2025",
        immagine: require("@/assets/logo_nature.png"),
      },
      {
        id: 6,
        titolo: "Poster Futuristico",
        prezzo: 18,
        disponibile: true,
        descrizione:
          "Poster in stile cyberpunk con luci neon e sfumature viola.",
        tipo: "Grafica",
        data: "Giugno 2025",
        immagine: require("@/assets/poster_futuristico.png"),
      },
      {
        id: 7,
        titolo: "Font Handwriting",
        prezzo: 8,
        disponibile: true,
        descrizione: "Font calligrafico scritto a mano per progetti creativi.",
        tipo: "Font",
        data: "Luglio 2025",
        immagine: require("@/assets/font_handwriting.png"),
      },
      {
        id: 8,
        titolo: "Font Retro Display",
        prezzo: 14,
        disponibile: true,
        descrizione: "Font display anni 80, perfetto per titoli vintage.",
        tipo: "Font",
        data: "Agosto 2025",
        immagine: require("@/assets/font_retrodisplay.png"),
      },
    ],

    carrello: JSON.parse(localStorage.getItem("carrello")) || [],
  },

  mutations: {
    AGGIUNGI_CARRELLO(state, grafica) {
      const esistente = state.carrello.find((p) => p.id === grafica.id);
      if (esistente) {
        esistente.quantità++;
      } else {
        state.carrello.push({ ...grafica, quantità: 1 });
      }
      localStorage.setItem("carrello", JSON.stringify(state.carrello));
    },

    SVUOTA_CARRELLO(state) {
      state.carrello = [];
      localStorage.setItem("carrello", JSON.stringify(state.carrello));
    },

    RIMUOVI_DAL_CARRELLO(state, id) {
      const prodotto = state.carrello.find((item) => item.id === id);
      if (prodotto) {
        if (prodotto.quantità > 1) {
          prodotto.quantità--;
        } else {
          state.carrello = state.carrello.filter((item) => item.id !== id);
        }
        localStorage.setItem("carrello", JSON.stringify(state.carrello));
      }
    },
  },

  getters: {
    carrelloCount: (state) => state.carrello.length,
  },
});
