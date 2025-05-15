// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o
//  próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um
// programa na linguagem que desejar onde, informado um número,
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número
// informado pertence ou não a sequência.

const isFibonacci = (number: number) => {
  let a = 0;
  let b = 1;

  if (a === number || b === number)
    return "O número informado pertence a sequência Fibonacci";

  while (b <= number) {
    const valueAnt = b;
    b += a;
    a = valueAnt;

    if (number === a)
      return "O número informado pertence a sequência Fibonacci";
  }

  return "O número informado NÃO pertence a sequência Fibonacci";
};

console.log(isFibonacci(21));
console.log(isFibonacci(22));
