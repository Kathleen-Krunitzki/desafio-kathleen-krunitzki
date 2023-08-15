import { aplicaAcrescimo } from './services/aplica-acrescimo';
import { aplicaDesconto } from './services/aplica-desconto';
import { somaValoresCompra } from './services/soma-valores-compra';
import { validaFormaPagamento } from "./services/valida-forma-pagamento";
import { validaItens } from "./services/valida-itens";
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!validaFormaPagamento(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        const erroItens = validaItens(itens);

        if (erroItens) {
            return erroItens;
        }

        let totalItens = somaValoresCompra(itens);

        totalItens = aplicaAcrescimo(totalItens, metodoDePagamento);
        totalItens = aplicaDesconto(totalItens, metodoDePagamento);

        return `R$ ${totalItens.toFixed(2).replace(".",",")}`;
    }
}

export { CaixaDaLanchonete };
