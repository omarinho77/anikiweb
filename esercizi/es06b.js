function inverti_cifre(numero) {
    let negativo = numero < 0;
    numero = Math.abs(numero);

    let invertito = parseInt(numero.toString().split('').reverse().join(''));

    return negativo ? -invertito : invertito;
}
