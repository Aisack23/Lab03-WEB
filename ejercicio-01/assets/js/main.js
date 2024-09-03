const countVotes = (votes) => {
    let resultado = {};
    votes.forEach(votes => {
        resultado[votes.candidate]=(resultado[votes.candidate]||0)+1
    });
    return resultado;
};

const showResults = (resultado) => {
    alert("Resultados de la votación-->");
    for (let candidate in resultado) {
        alert(`${candidate}: ${resultado[candidate]} votes`);
    }
};

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    const resultado = countVotes(votes);
    showResults(resultado);
};

main();
