import { useState } from "react";
import IconDollar from "/icons/currenc-dollar-regular.svg";
import IconCreditCard from "/icons/credit-card-regular.svg";
import IconBank from "/icons/bank-regular.svg";
import IconMoney from "/icons/money-regular.svg";

const paymentMethods = [
  { id: "credit", label: "CARTÃO DE CRÉDITO", icon: IconCreditCard },
  { id: "debit", label: "CARTÃO DE DÉBITO", icon: IconBank },
  { id: "cash", label: "DINHEIRO", icon: IconMoney },
];

function CardPagamento() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  return (
    <div className="bg-[#F3F2F2] p-10 rounded-md w-[640px] flex flex-col gap-8">
      {/* Título */}
      <div className="flex items-center">
        <img src={IconDollar} className="w-5 h-5 mr-2" />
        <div>
          <h3 className="text-[16px] text-[#403937]">Pagamento</h3>
          <h5 className="text-[14px] text-[#574F4D]">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </h5>
        </div>
      </div>

      {/* Botões de pagamento */}
      <div className="flex flex-row gap-3">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedPayment(method.id)}
            className={`p-4 rounded-md flex items-center gap-2 transition-all w-full
              ${
                selectedPayment === method.id
                  ? "bg-[#ebe5f9] border border-[#7f46f7]"
                  : "bg-[#E6E5E5] border border-transparent"
              }`}
          >
            <img src={method.icon} className="w-4 h-4" />
            {method.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CardPagamento;
