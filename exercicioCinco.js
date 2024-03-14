const matriz = [];
let cont = 0

for (let i = 0; i < 3; i++) {
     matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = cont;
        cont++;
    }
}

console.log(matriz);