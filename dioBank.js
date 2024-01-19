//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//TODO: Crie um objeto chamado contaBancaria para armazenar informações da conta.
let  contaBancaria = {
    cliente: gets(),
    numeroConta : gets(),
    saldoInicial : parseFloat(gets())
  };
  
  // Impressão das informações: Nome, Número da Conta e Saldo:
  print(`Nome do cliente: ` + contaBancaria.cliente);
  print(`Número da conta: ` + contaBancaria.numeroConta);
  print(`Saldo: R$ `+ contaBancaria.saldoInicial.toFixed(2));