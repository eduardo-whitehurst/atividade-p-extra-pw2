import IconDollar from "/icons/currenc-dollar-regular.svg"
import IconCreditCard from "/icons/credit-card-regular.svg"
import IconBank from "/icons/bank-regular.svg"
import IconMoney from "/icons/money-regular.svg"

function CardPagamento() {
    return (
        <>
            <div className='bg-[#F3F2F2] p-10 rounded-md w-[640px] flex flex-col gap-8'>
            <div className='flex items-center'>
                <img
                src={IconDollar}
                className='w-5 h-5 mr-2'
                />
                <div>
                <h3 className='text-[16px] text-[#403937]'>
                    Pagamento
                </h3>
                <h5 className='text-[14px] text-[#574F4D]'>
                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                </h5>
                </div>
            </div>
            <div className='flex flex-row gap-3'>
                <button className='bg-[#E6E5E5] p-4 rounded-md flex items-center gap-2'>
                    <img src={IconCreditCard} className='w-4 h-4' />
                    CARTÃO DE CRÉDITO
                </button>
                <button className='bg-[#E6E5E5] p-4 rounded-md flex items-center gap-2'>
                    <img src={IconBank} className='w-4 h-4' />
                    CARTÃO DE DÉBITO
                </button>
                <button className='bg-[#E6E5E5] p-4 rounded-md flex items-center gap-2'>
                    <img src={IconMoney} className='w-4 h-4' />
                    DINHEIRO
                </button>
            </div>

            </div>
        </>
    )

}

export default CardPagamento
