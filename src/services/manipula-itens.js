export const extraiNomeItens = (itens) => {
  return itens.map((item) => {
    const [nomeItem] = item.split(",");

    return nomeItem;
  })
}