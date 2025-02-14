import IconeMapPinRegular from "/icons/map-pin-line-regular.svg"
import InputField from "../../components/InputField"

function FormEnderecoEntrega() {
    return (
        <>
            <div className='bg-[#F3F2F2] p-10 rounded-md w-[640px]'>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center'>
                        <img
                            src={IconeMapPinRegular}
                            className='w-5 h-5 mr-2'
                        />
                        <div>
                            <h3 className='text-[16px] text-[#403937]'>
                                Endereço de entrega
                            </h3>
                            <h5 className='text-[14px] text-[#574F4D]'>
                                Informe o endereço onde deseja receber o seu
                                pedido
                            </h5>
                        </div>
                    </div>
                    {/* form endereço */}
                    <div className='flex flex-col gap-4'>
                        <InputField type='text' placeholder='Rua' />
                        <div className='w-50'>
                            <InputField type='text' placeholder='Número' />
                        </div>
                        <div className='flex flex-row gap-3'>
                            <div className='w-50'>
                                <InputField type='text' placeholder='Bairro' />
                            </div>
                            <InputField type='text' placeholder='Cidade' />
                            <div className='w-20'>
                                <InputField type='text' placeholder='UF' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormEnderecoEntrega
