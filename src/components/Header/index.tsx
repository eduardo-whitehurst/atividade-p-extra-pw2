//Importações
import React from "react";

//Estiilização
import "./style.css";

//Componentes
export const HeaderPage = () => {
    const [notification, setNotification] = React.useState<number>(0);
    const [location, setLocation] = React.useState<string>("Cajazeiras-PB");

    return (
        <nav className="flex flex-row justify-between items-center mt-6 w-4/5 mx-auto">
            <img src='/images/home/logoIfF.png' alt="Logo" className="w-35" />

            <div className="flex flex-row justify-between items-center gap-1.5">
                <div className="flex flex-row justify-between items-center bg-[#EBE5F9] p-1 rounded-b-lg">
                   <img src='/icons/map-pin-fill.svg' alt="Pin" className="w-5 text-[#4B2995]" />
                   <p className="text-sm text-[#4B2995] font-semibold">{location}</p>
                </div>

                <div className="relative bg-[#F1E9C9] p-1 rounded-b-lg">
                    <img src='/icons/shopping-cart-fill.svg' alt="Carrinho" className="w-5 text-[#C47F17] "/>
                    {notification > 0 && (
                        <div className="absolute top-0 right-0 bg-[#C47F17] rounded-full w-3 h-3 flex justify-center items-center">{notification}</div>
                    )}
                </div>
            </div>
        </nav>
    )
}
