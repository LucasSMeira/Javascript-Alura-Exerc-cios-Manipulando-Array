const matriz = [];
let cont = 0

for (let i = 0; i < 3; i++) {
     matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        
        matriz[i][j] = cont;
        cont++;
    }
}

const acesso = matriz[1][2];

matriz[2][1] = 15;

console.log(matriz,acesso);
