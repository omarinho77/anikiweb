console.log("=== ESERCITAZIONE 4: JSON E SERIALIZZAZIONE ===\n");

console.log("--- PARTE 1: Serializzazione Base ---\n");

const libro = {
  titolo: "La Luna di Ferro",
  autore: "Marco Bellini",
  anno: 2003,
  genere: "Fantascienza",
  pagine: 412,
  disponibile: true
};

const libroJSON = JSON.stringify(libro);

console.log("Oggetto originale:", libro);
console.log("JSON stringa:", libroJSON);
console.log("Tipo:", typeof libroJSON);

const biblioteca = [
  { titolo: "Nebbie di Tokyo", autore: "Hiro Tanaka", anno: 1998 },
  { titolo: "Ombre nel Deserto", autore: "Sara El-Amin", anno: 2011 },
  { titolo: "Codice Blu", autore: "Luca Ferri", anno: 2020 }
];

const bibliotecaJSON = JSON.stringify(biblioteca, null, 2);

console.log("\nBiblioteca JSON (formattato):");
console.log(bibliotecaJSON);

const libroCompleto = {
  titolo: "Il Mare Invisibile",
  autore: "Giulia Riva",
  anno: 1975,
  genere: "Avventura",
  pagine: 389,
  isbn: "978-1234567890",
  disponibile: true,
  dataAcquisto: "2024-02-10"
};

const libroFiltrato = JSON.stringify(libroCompleto, ["titolo", "autore", "anno"]);

console.log("\nLibro filtrato (solo titolo, autore, anno):");
console.log(libroFiltrato);

console.log("\n--- PARTE 2: Deserializzazione ---\n");

const jsonString = '{"titolo":"Il Viaggiatore Perduto","autore":"Alan Moore","anno":1720,"pagine":540,"disponibile":true}';

const libroRecuperato = JSON.parse(jsonString);

console.log("Libro recuperato:", libroRecuperato);
console.log("Tipo:", typeof libroRecuperato);
console.log("Titolo:", libroRecuperato.titolo);

const arrayJSON = '[{"titolo":"Le Colline Rosse","autore":"Anna Grey","anno":1901},{"titolo":"Il Fiume Nero","autore":"David Stone","anno":1955},{"titolo":"Città di Vetro","autore":"Elisa Novak","anno":2008}]';

const libriArray = JSON.parse(arrayJSON);

libriArray.forEach(libro => {
  console.log("Titolo: " + libro.titolo);
});

console.log("\nNumero di libri:", libriArray.length);

const jsonNonValido = '{"titolo":"Libro Spezzato","autore":"Anonimo",}';

try {
  const risultato = JSON.parse(jsonNonValido);
} catch (errore) {
  console.log("ERRORE");
}

console.log("\n--- PARTE 3: Replacer e Reviver ---\n");

const utente = {
  nome: "Mario Rossi",
  email: "mario@example.com",
  password: "segreta123",
  ruolo: "admin"
};

function replacerSicuro(key, value) {
  if (key === "password") return undefined;
  return value;
}

const utenteJSON = JSON.stringify(utente, replacerSicuro);

console.log("Utente JSON (senza password):");
console.log(utenteJSON);

const prestito = {
  libro: "Il Ragazzo del Mare",
  utente: "Laura Bianchi",
  dataPrestito: new Date("2024-03-01"),
  dataScadenza: new Date("2024-03-15"),
  restituito: false
};

const prestitoJSON = JSON.stringify(prestito, null, 2);

console.log("\nPrestito JSON:");
console.log(prestitoJSON);

function reviverDate(key, value) {
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value);
  }
  return value;
}

const prestitoRecuperato = JSON.parse(prestitoJSON, reviverDate);

console.log("\nPrestito recuperato:");
console.log(prestitoRecuperato);

console.log("\n--- PARTE 4: Clonazione e Confronto ---\n");

const bibliotecaOriginale = {
  nome: "Biblioteca Centrale",
  indirizzo: {
    via: "Via Milano 22",
    città: "Milano",
    cap: "20121"
  },
  libri: [
    { titolo: "Luce Nascosta", disponibile: true },
    { titolo: "Eco del Tempo", disponibile: false }
  ]
};

const bibliotecaCopia = JSON.parse(JSON.stringify(bibliotecaOriginale));
bibliotecaCopia.indirizzo.città = "Torino";
bibliotecaCopia.libri[0].disponibile = false;

console.log("Città originale:", bibliotecaOriginale.indirizzo.città);
console.log("Città copia:", bibliotecaCopia.indirizzo.città);
console.log("Primo libro originale disponibile?", bibliotecaOriginale.libri[0].disponibile);
console.log("Primo libro copia disponibile?", bibliotecaCopia.libri[0].disponibile);

function oggettiUguali(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const libro1 = { titolo: "Test", autore: "A" };
const libro2 = { titolo: "Test", autore: "A" };
const libro3 = { autore: "A", titolo: "Test" };
const libro4 = { titolo: "Test", autore: "B" };

console.log("\nConfronto oggetti:");
console.log(oggettiUguali(libro1, libro2));
console.log(oggettiUguali(libro1, libro3));
console.log(oggettiUguali(libro1, libro4));

const storage = (function () {
  const dati = {};
  return {
    setItem: function (chiave, valore) {
      dati[chiave] = String(valore);
    },
    getItem: function (chiave) {
      return dati.hasOwnProperty(chiave) ? dati[chiave] : null;
    },
    removeItem: function (chiave) {
      delete dati[chiave];
    },
    clear: function () {
      for (let k in dati) delete dati[k];
    },
    get length() {
      return Object.keys(dati).length;
    }
  };
})();

storage.setItem("test", "valore");
console.log("Recuperato:", storage.getItem("test"));
console.log("Lunghezza:", storage.length);

const mieiBibliLibri = [
  { titolo: "Cronache di Nebbia", autore: "R. Keller" },
  { titolo: "La Città Sommersa", autore: "M. Vance" }
];

storage.setItem("biblioteca", JSON.stringify(mieiBibliLibri));
const bibliotecaRecuperata = JSON.parse(storage.getItem("biblioteca"));

console.log("\nLibri recuperati dallo storage:");
bibliotecaRecuperata.forEach(libro => {
  console.log("-", libro.titolo);
});

function salvaOggetto(chiave, oggetto) {
  storage.setItem(chiave, JSON.stringify(oggetto));
}

function recuperaOggetto(chiave) {
  try {
    const valore = storage.getItem(chiave);
    return valore ? JSON.parse(valore) : null;
  } catch (errore) {
    console.error("Errore nel recupero:", errore.message);
    return null;
  }
}

function aggiungiALista(chiave, elemento) {
  const lista = recuperaOggetto(chiave) || [];
  lista.push(elemento);
  salvaOggetto(chiave, lista);
}

storage.clear();
salvaOggetto("utente", { nome: "Mario", età: 30 });
const utenteSalvato = recuperaOggetto("utente");
console.log("\nUtente recuperato:", utenteSalvato);

aggiungiALista("preferiti", "Dune");
aggiungiALista("preferiti", "Neuromante");
const preferiti = recuperaOggetto("preferiti");
console.log("Preferiti:", preferiti);

class BibliotecaPersistente {
  constructor(chiaveStorage = "biblioteca") {
    this.chiaveStorage = chiaveStorage;
    this.libri = [];
    this.carica();
  }

  aggiungiLibro(libro) {
    this.libri.push(libro);
    this.salva();
  }

  rimuoviLibro(titolo) {
    this.libri = this.libri.filter(l => l.titolo.toLowerCase() !== titolo.toLowerCase());
    this.salva();
  }

  cercaLibro(titolo) {
    return this.libri.find(l => l.titolo.toLowerCase() === titolo.toLowerCase());
  }

  salva() {
    storage.setItem(this.chiaveStorage, JSON.stringify(this.libri));
  }

  carica() {
    try {
      const dati = storage.getItem(this.chiaveStorage);
      if (dati) this.libri = JSON.parse(dati);
    } catch (errore) {
      console.error("ERRORE", errore.message);
      this.libri = [];
    }
  }

  esportaJSON() {
    return JSON.stringify(this.libri, null, 2);
  }

  importaJSON(jsonString) {
    try {
      this.libri = JSON.parse(jsonString);
      this.salva();
    } catch (errore) {
      console.error("Errore import:", errore.message);
    }
  }

  getStatistiche() {
    const autori = new Set(this.libri.map(l => l.autore));
    const generi = new Set(this.libri.map(l => l.genere));
    const totalePagine = this.libri.reduce((t, l) => t + (l.pagine || 0), 0);

    return {
      totaleLibri: this.libri.length,
      autoriUnici: autori.size,
      totalePagine,
      generiUnici: generi.size
    };
  }
}

storage.clear();
const miabiblioteca = new BibliotecaPersistente();

miabiblioteca.aggiungiLibro({
  titolo: "Nebula Rising",
  autore: "K. Morgan",
  anno: 1962,
  genere: "Sci-Fi",
  pagine: 900
});

miabiblioteca.aggiungiLibro({
  titolo: "Shadow City",
  autore: "L. Grant",
  anno: 1987,
  genere: "Thriller",
  pagine: 410
});

console.log("Statistiche:", miabiblioteca.getStatistiche());
console.log("\nEsporta JSON:");
console.log(miabiblioteca.esportaJSON());

const bibliotecaDoporiavvio = new BibliotecaPersistente();
console.log("\nLibri dopo riavvio:", bibliotecaDoporiavvio.libri.length);

console.log("\n=== FINE ESERCITAZIONE 4 ===");
console.log("Ottimo lavoro!");
