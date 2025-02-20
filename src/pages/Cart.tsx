import FormEnderecoEntrega from '../components/formEnderecoEntrega'
import CardPagamento from '../components/CardPagamento'
import { HeaderPage } from '../components/Header'
import OrderSummary from '../components/LanchesSelecionados'

const Cart = () => {
    return (
        <div>
            <HeaderPage />
            <div
                className="mt-6 w-4/5 mx-auto"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 50
                    }}
                >
                    <div>
                        <h2 className="text-lg font-bold mb-4">Complete seu pedido</h2>
                        <FormEnderecoEntrega />
                    </div>
                    <CardPagamento />
                </div>
                <OrderSummary />
            </div>
        </div>
    )
}

export default Cart