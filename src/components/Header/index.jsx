// import * as S from './styles';
import { Link } from 'react-router-dom';

import bee from '../../assets/bee/marca_dagua.png';
import logo from '../../assets/logo/V3Prancheta 1.png'
// import logo from '../../assets/logo_secondary/V3Prancheta 1.png'
// import logo from '../../assets/Sublogo/V3Prancheta 1.png'

import { PiChatsThin } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { BiSearchAlt2 } from "react-icons/bi";

function Header(){
  return(
  <>
    <section class='py-2 bg-primary text-white text-center px-8 sm:w-full'>
  <Link to="/" class='text-secondary'>
    <img src={bee}  alt="bee" className='inline-block w-6 h-auto' />
    <strong class="mx-2">SEJA UMA REVENDEDORA</strong> 
    <strong className="text-secondary"> MINI MEL</strong>
  </Link>
</section>

<header class='shadow-sm shadow-primary font-[sans-serif] flex justify-center sticky top-0 bg-white z-50'>
  <section class='md:flex lg:items-center relative lg:px-10 px-4 lg:min-h-[75px] max-lg:min-h-[30px]'>
    <a href="javascript:void(0)" class="max-sm:w-full max-sm:mb-3 shrink-0">
      <img src={logo} alt="logo" class='w-25 h-[150px]' />
    </a>
    <div class='flex flex-wrap w-full items-center'>
      <input type='text' placeholder='O que você está procurando?' class='xl:w-96 max-lg:w-full lg:ml-8 max-md:mt-0 max-lg:ml-4 bg-gray-100 px-6 rounded h-10 outline-[#333] text-sm hidden md:block lg:block' />
      <div class="ml-auto max-lg:mt-4">
        <ul class='flex items-center'>
          <li class='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-primary hover:text-primary hover:fill-secondary cursor-pointer'>
            <PiChatsThin className="mx-2 w-6 h-6 text-secondary" />
            Central de Atendimento
          </li>
          <li class='flex text-[15px] max-lg:py-2 px-3  text-primary hover:text-primary hover:fill-secondary cursor-pointer'>
            <BsCart3 className="w-5 h-6 text-secondary" />
          </li>
          <div class="flex justify-between items-center lg:hidden">
  <li id="toggle" class="flex text-[15px] py-2 px-3 text-secondary hover:text-primary hover:fill-secondary cursor-pointer">
    <button>
      <TiThMenu class="w-5 h-6" />
    </button>
  </li>
  <li id="toggle" class="flex text-[15px] py-2 px-3 text-secondary hover:text-primary hover:fill-secondary cursor-pointer">
    <button>
      <BiSearchAlt2 class="w-5 h-6" />
    </button>
  </li>
</div>
        </ul>
      </div>
    </div>
  </section>
</header>

<div id="collapseMenu" class='shadow-sm shadow-primary flex flex-wrap items-center px-10 py-3 relative min-h-[46px] max-lg:hidden'>

  <ul class='flex justify-center lg:space-x-4 max-lg:space-y-3 w-full max-lg:block'>
    <li class='max-lg:border-b max-lg:py-2 px-3'>
      <a href='javascript:void(0)' class='lg:hover:text-secondary text-primary text-[15px] font-medium block'>VESTIDOS</a>
    </li>
    <li class='max-lg:border-b max-lg:py-2 px-3'>
      <a href='javascript:void(0)' class='lg:hover:text-secondary text-primary text-[15px] font-medium block'>CONJUNTOS</a>
    </li>
    <li class='max-lg:border-b max-lg:py-2 px-3'>
      <a href='javascript:void(0)' class='lg:hover:text-secondary text-primary text-[15px] font-medium block'>BLUSAS</a>
    </li>
    <li class='max-lg:border-b max-lg:py-2 px-3'>
      <a href='javascript:void(0)' class='lg:hover:text-secondary text-primary text-[15px] font-medium block'>SHORTS</a>
    </li>
    <li class='max-lg:border-b max-lg:py-2 px-3'>
      <a href='javascript:void(0)' class='lg:hover:text-secondary text-primary text-[15px] font-medium block'>MACAQUINHOS</a>
    </li>
  </ul>

</div>


  </>

  )
}


export default Header;