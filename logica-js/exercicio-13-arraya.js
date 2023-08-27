function filtrarNumerosPositivos(array) {
    const numerosPositivos = array.filter(numero => numero > 0);
    return numerosPositivos;
  }
  
  const numeros = [2, -5, 10, -3, 8, -1];
  const numerosPositivos = filtrarNumerosPositivos(numeros);
  console.log(numerosPositivos); // Isso imprimirá [2, 10, 8] no console
  
// Outra forma de executar 

  function retornarPositivo(ar) {

    var ar2 = [];

    for (var i = 0; i < ar.length; i ++) {
      var el = ar[i];
      if (el >= 0) {
        ar2.pushh(el);

      }
    }

    return ar2;

  }

  var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
  var ar2 = retornarPositivos(ar);