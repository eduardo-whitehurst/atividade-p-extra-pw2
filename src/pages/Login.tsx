import { MapPinIcon } from '@heroicons/react/24/solid';
import logo from "../../public/images/logo/logo-ifpb-vertical.png";
import burguer from "../../public/images/logo/logo.png";
import "@fontsource/baloo-2/latin.css";


const Login = () => {
  return (
    <div className='bg-[#F1E9C9] h-screen w-screen '>
      <div className="flex flex-row justify-around gap-96 p-4 items-center">
        <img src={logo} alt="ifpb logo" className='w-25 h-auto'/>
        <div className='flex flex-row gap-1'>
          <MapPinIcon className='w-5 text-[#4B2995]'/>
          <p className='text-[#4B2995]'>Cajazeiras, PB</p>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center '>
          <div className=' mt-10 w-2xl'>
            <h2 className='text-5xl font-baloo font-bold text-[#403937]'>Bem vindos ao IFPB Lanches</h2>
            <p className='text-xl text-[#8D8686]'>Seu lanche no IFPB de forma rápida e prática! Acesse sua conta ou cadastre-se e aproveite a melhor experiência.</p>
          </div>

          <div className='flex items-center'>
            <div className='pt-3'>
              <div className='flex flex-col gap-4 w-lg justify-center items-center '>
              <div className='flex flex-col w-full'>
                  <form className='flex flex-col gap-2.5 w-full'>
                    <div>
                      <label className='font-bold'>Email</label>
                      <input type="email" className='w-full h-9 bg-white pl-4 rounded-md' placeholder='Digite seu email'/>
                    </div>
                    <div>
                      <label className='font-bold'>Senha</label>
                      <input type="password" className='w-full h-9 bg-white pl-4 rounded-md' placeholder='Digite seu email'/>
                    </div>
                    <button className='bg-[#34C759] w-full h-11 rounded-md text-white font-bold mt-8'>Login</button>
                    <button className='bg-[#FFCC00] w-full h-11 rounded-md text-[#8D8686] font-bold'>Login com Google</button>
                  </form>
                </div>
                <p className='font-bold'>Não tem conta? <a className='text-[#007AFF]'>Cadastre-se gratuitamente!</a></p>
              </div>
            </div>
            <div>
              <img src={burguer} alt="hamburguer" />
            </div>
          </div>

        </div>
      </div>




      </div>
  )
}

export default Login