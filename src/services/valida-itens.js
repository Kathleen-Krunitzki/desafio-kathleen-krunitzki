import { nomesItensValidos } from "../constantes";
import { extraiNomeItens } from "./manipula-itens";


export const validaItens = (itens) => {
  if (!Array.isArray(itens)) {
    return "Não há itens no carrinho de compra!";
  }

  if (itens.length === 0) {
    return "Não há itens no carrinho de compra!";
  }

  let erro;
  const nomeItens = extraiNomeItens(itens);

  itens.forEach((item) => {
    if (typeof item !== 'string') {
      erro = "Item inválido!";
      return;
    }

    if (item.indexOf(",") === -1) {
      erro = "Item inválido!";
      return;
    }

    const [nomeItem, quantidadeItem] = item.split(",");

    if (!nomesItensValidos.includes(nomeItem)) {
      erro = "Item inválido!";
      return;
    }

    if (isNaN(quantidadeItem) || +quantidadeItem === 0) {
      erro = "Quantidade inválida!";
      return;
    }

    if (nomeItem === "chantily" && !nomeItens.includes("cafe")) {
      erro = "Item extra não pode ser pedido sem o principal"; 
      return;
    }

    if (nomeItem === "queijo" && !nomeItens.includes("sanduiche")) {
      erro = "Item extra não pode ser pedido sem o principal";
      return;
    }

  });

  return erro;
}