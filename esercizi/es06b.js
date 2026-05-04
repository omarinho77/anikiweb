const readline = require("readline");

function inverti_cifre(n) {
    const segno = Math.sign(n);
    const invertito = parseInt(Math.abs(n).toString().split("").reverse().join(""));
    return segno * invertito;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Inserisci un numero intero: ", (input) => {
    const numero = parseInt(input);

    if (isNaN(numero)) {
        console.log("Errore: devi inserire un numero valido.");
    } else {
        const risultato = inverti_cifre(numero);
        console.log("Numero invertito:", risultato);
    }

    rl.close();
});
