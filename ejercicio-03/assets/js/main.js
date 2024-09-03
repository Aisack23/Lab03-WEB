const calculateFactorial = (n) => {
    let m = n;
    var i = m-1;
    while(i > 1){
        m *= i;
        i--;
    }
    alert("El factorial de "+n+" es "+m)
}

const requestNumber = () => {
    let n = parseInt(prompt("Introduce el Numero a Factorizar:"));
    calculateFactorial(n);
}

const main = () => {
    requestNumber();
}

main();
