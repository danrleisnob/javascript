let vitoria = 101;
let derrota = 0;

function calcularRanq(vitoria, derrota) {
    const ranqueada = vitoria - derrota;
    
    let elo = "Ferro";
    
    if (ranqueada <= 10) {
        elo = "Ferro";
    } else if (ranqueada >= 11 && ranqueada <= 20) {
        elo = "Bronze";
    } else if (ranqueada >= 21 && ranqueada <= 50) {
        elo = "Prata";
    } else if (ranqueada >= 51 && ranqueada <= 80) {
        elo = "Ouro";
    } else if (ranqueada >= 81 && ranqueada <= 90) {
        elo = "Diamante";
    } else if (ranqueada >= 91 && ranqueada <= 100) {
        elo = "Lendário";
    } else {
        elo = "Imortal";
    }

    return { saldo: vitoria - derrota, elo: elo };
}

let resultado = calcularRanq(vitoria, derrota);
console.log(`O Herói tem um saldo de: ${resultado.saldo} está no Elo: ${resultado.elo}`);