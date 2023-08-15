export const aplicaAcrescimo = (valorTotal, formaPagamento) => {
  if (formaPagamento === "credito") {
    return valorTotal * 1.03
  }

  return valorTotal;
}