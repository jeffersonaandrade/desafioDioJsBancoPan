// Recebe o capital inicial, a taxa de juros e o tempo em meses como entrada
const capitalInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const tempoMeses = parseInt(gets());

// Verifica se todos os valores de entrada são válidos e se o tempo em meses é maior que 0
if (!isNaN(capitalInicial) && !isNaN(taxaJuros) && !isNaN(tempoMeses) && tempoMeses > 0) {
  // Calcula o montante final
  const montanteFinal = capitalInicial * (1 + (taxaJuros / 100) * tempoMeses);

  // Formata e exibe o resultado com as informações do período, capital inicial, taxa de juros e montante final
  const periodo = tempoMeses === 1 ? '1 mês' : `${tempoMeses} meses`;
  console.log(`Montante em ${periodo}, com R$ ${capitalInicial.toFixed(2)} iniciais, ${taxaJuros}% juros, e: R$ ${montanteFinal.toFixed(2)}.`);
} else {
  // Se algum valor de entrada não for válido ou o tempo em meses não for maior que 0, imprime uma mensagem de erro
  console.log('Por favor, insira valores validos e um periodo de tempo adequado.');
}