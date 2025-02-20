// Importações
import React from "react";
import logo from "../../assets/images/home/logoIfF.png"; // Caminho da logo

// Estilização
import "./style.css";

// Tipagem dos itens do carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface HeaderProps {
  cartItems?: CartItem[]; // Torna opcional para evitar erro de undefined
}

export const HeaderPage: React.FC<HeaderProps> = ({ cartItems = [] }) => {
  const [location, setLocation] = React.useState<string>("Cajazeiras-PB");

  // Calcula o total de itens no carrinho
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  console.log("Itens no carrinho:", cartItems); // Debugging

  return (
    <nav className="flex flex-row justify-between items-center mt-6 w-4/5 mx-auto">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-[124px] h-[89.91px]" />

      <div className="flex flex-row justify-between items-center gap-1.5">
        {/* Localização */}
        <div className="flex flex-row justify-between items-center bg-[#EBE5F9] p-1 rounded-b-lg">
          <img src="/icons/map-pin-fill.svg" alt="Pin" className="w-5 text-[#4B2995]" />
          <p className="text-sm text-[#4B2995] font-semibold">{location}</p>
        </div>

        {/* Carrinho de compras */}
        <div className="relative bg-[#F1E9C9] p-1 rounded-b-lg">
          <img src="/icons/shopping-cart-fill.svg" alt="Carrinho" className="w-5 text-[#C47F17]" />
          {totalItems > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#c47e16] rounded-full flex justify-center items-center">
              <span className="text-white text-xs font-bold">{totalItems}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
