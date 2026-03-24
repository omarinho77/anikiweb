
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Uso: node Es4a.js <numero1> <operazione> <numero2>");
  console.log("Operazioni: add, sub, mul, div");
  process.exit(1);
}

const num1 = parseFloat(args[0]);
const operation = args[1];
const num2 = parseFloat(args[2]);

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    if (num2 === 0) {
      console.log("Errore: divisione per zero");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log("Operazione non valida. Usa: add, sub, mul, div");
    process.exit(1);
}

console.log(`Risultato: ${result}`);const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Uso: node Es4a.js <numero1> <operazione> <numero2>");
  console.log("Operazioni: add, sub, mul, div");
  process.exit(1);
}

const num1 = parseFloat(args[0]);
const operation = args[1];
const num2 = parseFloat(args[2]);

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    if (num2 === 0) {
      console.log("Errore: divisione per zero");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log("Operazione non valida. Usa: add, sub, mul, div");
    process.exit(1);
}

console.log(`Risultato: ${result}`);
