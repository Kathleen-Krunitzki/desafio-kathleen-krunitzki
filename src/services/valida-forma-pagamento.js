import { tiposPagamentoValidos } from "../constantes";

export const validaFormaPagamento = (formaPagamento) => {
  if (tiposPagamentoValidos.includes(formaPagamento)) {
    return true;
  }
  
  return false;
}