let num1 = parseFloat(prompt("Inserisci il primo numero:"));
let num2 = parseFloat(prompt("Inserisci il secondo numero:"));
let operazione = prompt("Inserisci l'operazione (+, -, *, /, **):");

let risultato;

if (isNaN(num1) || isNaN(num2)) {
    alert("Errore: devi inserire numeri validi.");
} else {
    switch (operazione) {
        case "+":
            risultato = num1 + num2;
            break;
        case "-":
            risultato = num1 - num2;
            break;
        case "*":
            risultato = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Errore: divisione per zero.");
                break;
            }
            risultato = num1 / num2;
            break;
        case "**":
            risultato = num1 ** num2;
            break;
        default:
            alert("Errore: operazione non valida.");
    }

    if (risultato !== undefined) {
        alert("Il risultato è: " + risultato);
    }
}
