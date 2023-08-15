export const aplicaDesconto = (valorTotal, formaPagamento) => {
  if (formaPagamento === "dinheiro") {
    return valorTotal * 0.95;
  }
  return valorTotal;
}