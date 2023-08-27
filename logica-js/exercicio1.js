// 01- Calcular a soma dos números ímpares maiores que 10 e menores que 30


let soma1 = 0; 

for (let num = 11; num < 30; num += 2) {  // num +=2: num = num + 2
  soma1 += num;
  // Se o console.log() ficar dentro do bloco, vai somar e imprimir de um em um
}
console.log(soma1);
// O console.log() fora do bloco vai imprimir depois que somar tudo
// Para executar no terminal o seguinte comando: node.exe ./nomedoarquivo.js e aprta enter. 
//Para saber qual programa esta instalado; Digita node -v e aperta enter. 