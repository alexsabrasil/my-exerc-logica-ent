// constante //

const lugar = 'mundo';
const saudacao = 'olá';

console.log('$(saudacao) $(lugar)');

// No terminal digita: node ./nomedoarquivo.js e aperta enter

// função //

function mostranome() {

    var nome = 'Alê'
    return nome
}

console.log(mostranome())

//No terminal digita: node.exe ./nomedoarquivo.js

// Para fazer em aula: 1- Imprimir números de 1 a 10: //

    for (var i = 1; i <= 10; i++)
    {console.log(i); }

// Imprimir os números ímpares menores que 100 //

for (var i = 1; i <= 100; i += 2)
{ console.log (i); }

// Soma dos números de 1 a 10 (desafio)

var soma = 0;

for (var i = 1; i <= 10; i++) {
    soma += i;
}

console.log("A soma dos números de 1 a 10 é: " + soma);

// No código acima, a variável 'soma' é inicializada como zero.// 
// O loop percorre os números de 1 a 10 //
// E em cada iteração, o valor de 'i' é somado à variável 'soma'//
// No final do loop, o valor total da soma é impresso no console.//

// Exercício para casa //

// 1. Calcular a soma dos números ímpares maiores que 10 e menores que 30 //

// no js //

var somaImpares = 0;

for (var i = 11; i < 30; i += 2) {
    somaImpares += i;
}

console.log("A soma dos números ímpares entre 10 e 30 é: " + somaImpares);



// 2. Calcular a soma dos números pares maiores que 10 e menores que 30 //

var somaPares = 0;

for (var i = 12; i < 30; i += 2) {
    somaPares += i;
}

console.log("A soma dos números pares entre 10 e 30 é: " + somaPares);

// Nos dois casos, utilizei loops para percorrer os números dentro dos // 
//intervalos especificados. No primeiro caso, incrementei i de 2 em 2 para // 
// obter os números ímpares, e no segundo caso, incrementei i de 2 em 2 para // 
// obter os números pares. Em cada iteração, somei o valor de i à variável de // 
// soma correspondente. Ao final, imprimi o resultado no console.

