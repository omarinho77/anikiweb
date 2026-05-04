const libro = {
  titolo: "1984",
  autore: "George Orwell",
  annoPubblicazione: 1949,
  genere: "Distopico",
  numeroPagine: 328
};
for (let chiave in libro) {
  console.log(chiave + ": " + libro[chiave]);
}
