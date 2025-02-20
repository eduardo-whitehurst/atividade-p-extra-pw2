import { useState } from "react";

export default function OrderSummary() {
  const [items, setItems] = useState([
    { id: 1, name: "Expresso Tradicional", price: 9.9, quantity: 1, image: "/images/coffees/coffee.png" },
    { id: 2, name: "Latte", price: 9.9, quantity: 2, image: "/images/coffees/coffee2.png" },
  ]);
  const deliveryFee = 3.5;

  const updateQuantity = (id: number, delta: number) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItemsPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = totalItemsPrice + deliveryFee;

  return (
    <div className="bg-gray-100 p-6 rounded-xl w-96 shadow-lg"
      style={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <h2 className="text-lg font-bold mb-4">Lanches selecionados</h2>
      <div>
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
            <img className="text-2xl" src={item.image} />
            <div className="flex flex-col flex-1 ml-4">
              <span className="font-semibold">{item.name}</span>
              <span className="text-gray-600">R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <div className="flex items-center">
              <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 text-lg">-</button>
              <span className="px-2">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 text-lg">+</button>
              <button onClick={() => removeItem(item.id)} className="ml-2 text-red-500">🗑️</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-between font-semibold mt-4">
          <span>Total de itens</span>
          <span>R$ {totalItemsPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Entrega</span>
          <span>R$ {deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold mt-2">
          <span>Total</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
      </div>
      <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold">
        CONFIRMAR PEDIDO
      </button>
    </div>
  );
}
