import { useState } from "react";

export default function OrderSummary() {
  const [items, setItems] = useState([
    { id: 1, name: "Expresso Tradicional", price: 9.9, quantity: 1, image: "/images/coffees/Expresso.svg" },
    { id: 2, name: "Latte", price: 9.9, quantity: 2, image: "/images/coffees/Latte.svg" },
  ]);

  const deliveryFee = 3.5;

  const updateQuantity = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItemsPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = totalItemsPrice + deliveryFee;

  return (
    <div className="w-96 bg-[#f2f1f1] p-4 rounded-tr-[40px] rounded-bl-[40px] shadow-lg">
      {items.map((item) => (
        <div key={item.id} className="h-20 px-2 py-2 flex justify-between items-start mb-2">
          <div className="flex items-center gap-4">
            <img className="w-16 h-16" src={item.image} alt={item.name} />
            <div className="flex flex-col gap-2">
              <div className="text-[#3f3937] text-base font-normal">{item.name}</div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#e6e5e5] rounded-md flex items-center gap-1">
                  <button onClick={() => updateQuantity(item.id, -1)}>
                    <img src="/icons/minus-bold.svg" alt="Diminuir" className="w-4 h-4" />
                  </button>
                  <span className="w-5 text-center text-[#262220]">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    <img src="/icons/plus-bold.svg" alt="Aumentar" className="w-4 h-4" />
                  </button>
                </div>
                <button onClick={() => removeItem(item.id)} className="px-2 bg-[#e6e5e5] rounded-md flex items-center">
                  <img src="/icons/trash-regular.svg" alt="Remover" className="w-4 h-4" />
                  <span className="text-[#564f4c] text-xs uppercase ml-1">Remover</span>
                </button>
              </div>
            </div>
          </div>
          <div className="text-right text-[#564f4c] text-base font-bold">R$ {item.price.toFixed(2)}</div>
        </div>
      ))}

      {/* Resumo do Pedido */}
      <div className="mt-4">
        <div className="flex justify-between text-[#564f4c] text-sm">
          <span>Total de itens</span>
          <span>R$ {totalItemsPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[#564f4c] text-sm">
          <span>Entrega</span>
          <span>R$ {deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[#3f3937] text-xl font-bold mt-2">
          <span>Total</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
      </div>

      {/* Botão de Confirmar Pedido */}
      <button className="mt-4 w-full bg-[#dbac2b] text-white py-3 rounded-md font-bold uppercase">
        Confirmar Pedido
      </button>
    </div>
  );
}
