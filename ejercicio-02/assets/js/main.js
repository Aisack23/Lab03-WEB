
const plus = (n1, n2) => {
    return n1 + n2;
};
const subtract = (n1, n2) =>{
    return n1 - n2;
} ;
const multiply = (n1, n2) =>{
    return n1 * n2;
} ;
const split = (n1, n2) => {
    if (n2!=0) {
        return n1 / n2;
    }else{
        alert("Error - No se puede dividir entre cero")
    }
};
const requestNumber = () => {
    let n1 = parseInt(prompt("INTRODUCE UN NUMERO: "));
    let n2 = parseInt(prompt("INTRODUCE OTRO NUMERO: "));
    if (isNaN(n1) || isNaN(n2) ) {
        alert("ERROR - INTRODUCE NUMEROS VALIDOS");
        requestNumber();
    } else {
        selectOperation(n1, n2);
    }
};

const selectOperation = (n1, n2) => {
    var opc = 0;
    let ans = 0;
    do {
        opc = parseInt(prompt("Introduce una opción:\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir\n5.Salir"));
        switch (opc) {
            case 1:
                ans = plus(n1,n2);
                break;
            case 2:
                ans = subtract(n1,n2);
                break;
            case 3:
                ans = multiply(n1,n2);
                    break;
            case 4:
                ans = split(n1,n2);
                    break;
            default:
                alert("Introduce una opcion valida");
                break;
        }
        alert("El resultado es: "+ans);
        requestNumber();
    } while (opc != 5);
};

const main = () => {
    requestNumber();
}

main();
