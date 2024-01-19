//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Saiba mais sobre Expressões Regulares: 
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions

// Recebe o número de conta como entrada
const numeroConta = gets();

// Verifica se o número de conta consiste em exatamente 6 dígitos
if (/^\d{6}$/.test(numeroConta)) {
  const numArray = numeroConta.split('').map(Number);
  
  // Calcula a soma dos dígitos no número de conta
  const sum = numArray.reduce((a, b) => a + b, 0);
  
  // Verifica se o primeiro dígito é maior que zero
  if (numArray[0] > 0) {
    // Verifica se a soma dos dígitos do número de conta é menor ou igual a 30
    if (sum <= 30) {
      // Se ambas as condições acima forem verdadeiras, imprime a mensagem indicando que o número de conta é válido
      console.log('Numero de conta valido.');
    } else {
      // Se a soma dos dígitos for maior que 30, imprime a mensagem indicando que o número de conta é inválido
      console.log('Numero de conta invalido: A soma dos digitos e maior que 30.');
    }
  } else {
    // Se o primeiro dígito for igual a zero, imprime a mensagem indicando que o número de conta é inválido
    console.log('Numero de conta invalido: O primeiro digito deve ser maior que zero.');
  }
} else {
  // Se o número de conta não tiver exatamente 6 dígitos, imprime a mensagem indicando que o número de conta é inválido
  console.log('Numero de conta invalido: O numero de conta deve ter exatamente 6 digitos.');
}