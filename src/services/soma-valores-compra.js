import { precoPorItem } from "../constantes"

export const somaValoresCompra = (itens) => {
  let valorTotal = 0;

  itens.forEach((item) => {
    const [nomeItem, quantidadeItem] = item.split(",");

    valorTotal = valorTotal + (quantidadeItem * precoPorItem[nomeItem]);
  });

  return valorTotal;
}