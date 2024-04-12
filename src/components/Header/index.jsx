// import * as S from './styles';
import bee from '../../assets/bee/marca_dagua.png';
import logo from '../../assets/logo/V3Prancheta 1.png'
import { Link } from 'react-router-dom';

import { PiChatsThin } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";


function Header(){
  return(
  <>
    <section class='py-2 bg-primary text-white text-center px-10'>
      <Link to="/" class='text-white'>
        <img src={bee}  alt="bee" className='inline-block w-12 h-auto' />
        <strong class="mx-2">SEJA UMA REVENDEDORA</strong> 
        <strong className="text-secondary"> MINI MEL</strong>
      </Link>
    </section>

    <header class='shadow-md font-[sans-serif] flex justify-center'>
        <section
          class=' md:flex lg:items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[75px] max-lg:min-h-[60px]'>
          <a href="javascript:void(0)" class="max-sm:w-full max-sm:mb-3 shrink-0">
            <img src={logo} alt="logo" class='w-[150px]' />
          </a>
          <div class='flex flex-wrap w-full items-center'>
            <input type='text' placeholder='O que você está procurando?' class='xl:w-96 max-lg:w-full lg:ml-8 max-md:mt-4 max-lg:ml-4 bg-gray-100 px-6 rounded h-10 outline-[#333] text-sm' />
            <div class="ml-auto max-lg:mt-4">
              <ul class='flex items-center'>
                <li class='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-secondary hover:text-primary hover:fill-secondary cursor-pointer'>
                  <PiChatsThin className="mx-2 w-6 h-6" />
                  Central de Atendimento
                </li>
                <li class='flex text-[15px] max-lg:py-2 px-3  text-secondary hover:text-primary hover:fill-secondary cursor-pointer'>
                  <BsCart3 className="w-5 h-6" />
                </li>
                <li id="toggle" class='flex text-[15px] max-lg:py-2 px-3  text-secondary hover:text-primary hover:fill-secondary cursor-pointer lg:hidden'>
                  <button>
                    <TiThMenu className="w-5 h-6"/>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </header>
    
    <div id="collapseMenu" class='flex flex-wrap items-center px-10 py-3 bg-[#333] relative min-h-[46px] max-lg:hidden'>

      <ul class='flex justify-center lg:space-x-4 max-lg:space-y-3 w-full max-lg:block'>
        <li class='max-lg:border-b max-lg:py-2 px-3'>
          <a href='javascript:void(0)' class='lg:hover:text-yellow-300 text-yellow-300 text-[15px] font-medium block'>VESTIDOS</a>
        </li>
        <li class='max-lg:border-b max-lg:py-2 px-3'>
          <a href='javascript:void(0)' class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>CONJUNTOS</a>
        </li>
        <li class='max-lg:border-b max-lg:py-2 px-3'>
          <a href='javascript:void(0)' class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>BLUSAS</a>
        </li>
        <li class='max-lg:border-b max-lg:py-2 px-3'>
          <a href='javascript:void(0)' class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>SHORTS</a>
        </li>
        <li class='max-lg:border-b max-lg:py-2 px-3'>
          <a href='javascript:void(0)' class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>MACAQUINHOS</a>
        </li>
      </ul>
      
    </div>
    
    
    
    
    
    
    
    
    
    
  </>

  )
}


export default Header;