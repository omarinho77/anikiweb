console.log("=== ESERCITAZIONE 1: BIBLIOTECA DI LIBRI ===\n");

console.log("--- PARTE 1: Creazione Oggetti ---\n");

const libro1 = {
  titolo: "Nebula Protocol",
  autore: "Luca Marinelli",
  anno: 2012,
  genere: "Sci-Fi",
  pagine: 620,
  disponibile: true
};

console.log("Libro 1:", libro1);

const libro2 = {
  titolo: "Le Ombre di Venezia",
  autore: "Giulia Ferri",
  anno: 2007,
  genere: "Thriller",
  pagine: 410,
  disponibile: false
};

console.log("\n--- PARTE 2: Accesso e Modifica ---\n");

console.log(`Titolo: ${libro1.titolo} - Autore: ${libro1.autore}`);

libro2.disponibile = true;

libro1.isbn = "978-0001122334";

console.log("\n--- PARTE 3: Metodi ---\n");

const libro3 = {
  titolo: "Il Codice della Luna",
  autore: "Marco De Santis",
  anno: 1999,
  pagine: 503,
  disponibile: true,

  getInfo: function () {
    return `${this.titolo} di ${this.autore} (${this.anno})`;
  },

  presta: function () {
    if (this.disponibile) {
      this.disponibile = false;
      console.log("Libro prestato: " + this.titolo);
    } else {
      console.log("Libro non disponibile");
    }
  },

  restituisci: function () {
    this.disponibile = true;
    console.log("Libro restituito: " + this.titolo);
  }
};

console.log(libro3.getInfo());
libro3.presta();
libro3.presta();
libro3.restituisci();
console.log("Libro disponibile?", libro3.disponibile);

console.log("\n--- PARTE 4: Array di Oggetti ---\n");

const biblioteca = [libro1, libro2, libro3];

function cercaPerAutore(libri, autore) {
  return libri.filter(libro => libro.autore === autore);
}

const libriTolkien = cercaPerAutore(biblioteca, "J.R.R. Tolkien");
console.log("Libri di Tolkien:", libriTolkien);

function libriDisponibili(libri) {
  let v = [];
  for (let i = 0; i < libri.length; i++) {
    if (libri[i].disponibile) {
      v.push(libri[i]);
    }
  }
  return v;
}

const disponibili = libriDisponibili(biblioteca);
console.log("\nLibri disponibili:");
disponibili.forEach(libro => console.log("- " + libro.titolo));

function stampaBiblioteca(libri) {
  libri.forEach(libro => {
    console.log(`Titolo: ${libro.titolo}`);
    console.log(`Autore: ${libro.autore}`);
    console.log(`Anno: ${libro.anno}`);
    console.log(`Disponibile: ${libro.disponibile ? "Sì" : "No"}`);
    console.log("---");
  });
}

console.log("\n=== CATALOGO BIBLIOTECA ===");
stampaBiblioteca(biblioteca);

console.log("\n--- PARTE 5: Sfida Finale ---\n");

function statisticheBiblioteca(libri) {
  const totaleLibri = libri.length;
  const libriDisponibili = libri.filter(l => l.disponibile).length;
  const totalePagine = libri.reduce((acc, l) => acc + l.pagine, 0);
  const mediaPagine = Math.round(totalePagine / totaleLibri);
  const autori = [...new Set(libri.map(l => l.autore))];

  return {
    totaleLibri,
    libriDisponibili,
    totalePagine,
    mediaPagine,
    autori
  };
}

const stats = statisticheBiblioteca(biblioteca);

console.log("\n=== STATISTICHE BIBLIOTECA ===");
console.log("Totale libri:", stats.totaleLibri);
console.log("Libri disponibili:", stats.libriDisponibili);
console.log("Totale pagine:", stats.totalePagine);
console.log("Media pagine:", stats.mediaPagine);
console.log("Autori:", stats.autori.join(", "));

console.log("\n=== FINE ESERCITAZIONE 1 ===");
console.log("Hai completato tutti gli esercizi? Ottimo lavoro!");
