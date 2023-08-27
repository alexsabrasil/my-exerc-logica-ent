function mediaArray(ar) {
    var n = ar.length;
    var soma = 0;
    for (var i = 0; i < n; i++) {
    soma += ar[i];
    }
    return soma / n;
    }
    var ar = [1, 3, 9, 15, 90];
    var media = mediaArray(ar);
    console.log("mediaArray: ", media);

    // No terminal digita: node.exe ./array.js //
    // mediaArray: 23.6 // 

    // Exercício para aula://

// 1. Crie uma aplicação para tirar a média de 4 notas: 6, 7, 8, 7 
// Apresente o valor no terminal Power Shell //

// 2. Crie uma aplicação para declarar dois números e retornar a sua soma: //

