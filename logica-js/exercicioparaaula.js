//Crie uma aplicação para tirar a média de 4 notas: 6, 7, 8, 7 //

function mediaArray(ar) {
    var n = ar.length;
    var soma = 0;
    for (var i = 0; i < n; i++) {
      soma += ar[i];
    }
    return soma / n;
  }
  
  var notas = [6, 7, 8, 7];
  var ar = [1, 3, 9, 15, 90];
  var ar = [6, 7, 8, 7];
  var media = mediaArray(notas);
  
  console.log("Média das notas:", media.toFixed(2));