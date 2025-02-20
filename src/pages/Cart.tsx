import { HeaderPage } from "../components/Header";
import FormEnderecoEntrega from "../components/formEnderecoEntrega";
import CardPagamento from "../components/CardPagamento";
import LanchesSelecionados from "../components/LanchesSelecionados";

const Cart = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderPage />

      {/* Conteúdo principal */}
      <div className="mt-10 grid grid-cols-3 gap-8 w-4/5">
        {/* Coluna esquerda - Endereço e Pagamento */}
        <div className="col-span-2 flex flex-col gap-8">
          {/* Título acima do formulário de entrega */}
          <div className="text-[#3f3937] text-lg font-bold font-['Baloo 2'] leading-normal">
            Complete seu pedido
          </div>

          <FormEnderecoEntrega />
          <CardPagamento />
        </div>

        {/* Coluna direita - Resumo do Pedido */}
        <div className="flex flex-col gap-6">
          {/* Título acima do carrinho de compras */}
          <div className="text-[#3f3937] text-lg font-bold font-['Baloo 2'] leading-normal">
            Lanches selecionados
          </div>

          <LanchesSelecionados />
        </div>
      </div>
    </div>
  );
};

export default Cart;
