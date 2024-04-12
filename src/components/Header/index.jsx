// import * as S from './styles';
import bee from '../../assets/bee/marca_dagua.png';
import logo from '../../assets/logo/V3Prancheta 1.png'
import { Link } from 'react-router-dom';


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
                <li
                  class='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] hover:text-[#007bff] hover:fill-[#007bff] cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-2" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                      <path
                        d="M14.5 12.75A3.22 3.22 0 0 1 12 11.6a3.27 3.27 0 0 1-2.5 1.15A3.22 3.22 0 0 1 7 11.6a2.91 2.91 0 0 1-.3.31 3.22 3.22 0 0 1-2.51.82 3.35 3.35 0 0 1-2.94-3.37v-.71a4.76 4.76 0 0 1 .24-1.5l1.57-4.7a1.75 1.75 0 0 1 1.66-1.2h14.56a1.75 1.75 0 0 1 1.66 1.2l1.57 4.7a4.76 4.76 0 0 1 .24 1.5v.71a3.35 3.35 0 0 1-2.92 3.37 3.2 3.2 0 0 1-2.51-.82c-.11-.1-.22-.22-.32-.33a3.28 3.28 0 0 1-2.5 1.17zm-9.78-10a.26.26 0 0 0-.24.17l-1.56 4.7a3.27 3.27 0 0 0-.17 1v.71a1.84 1.84 0 0 0 1.57 1.88A1.75 1.75 0 0 0 6.25 9.5a.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.75 1.75 0 0 0 1.93 1.74 1.84 1.84 0 0 0 1.57-1.88v-.71a3.27 3.27 0 0 0-.17-1l-1.56-4.7a.26.26 0 0 0-.24-.17z"
                        data-original="#000000" />
                      <path
                        d="M20 22.75H4A1.76 1.76 0 0 1 2.25 21v-9.52a.75.75 0 0 1 1.5 0V21a.25.25 0 0 0 .25.25h16a.25.25 0 0 0 .25-.25v-9.53a.75.75 0 1 1 1.5 0V21A1.76 1.76 0 0 1 20 22.75z"
                        data-original="#000000" />
                      <path
                        d="M15.5 22.75h-7a.76.76 0 0 1-.75-.75v-5a1.76 1.76 0 0 1 1.75-1.75h5A1.76 1.76 0 0 1 16.25 17v5a.76.76 0 0 1-.75.75zm-6.25-1.5h5.5V17a.25.25 0 0 0-.25-.25h-5a.25.25 0 0 0-.25.25z"
                        data-original="#000000" />
                    </g>
                  </svg>
                  Stores and Services
                </li>
                <li class='flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff] cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-2" viewBox="0 0 512 512">
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000" />
                  </svg>
                </li>
                <li class='flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff] cursor-pointer'>
                  <button
                    class='px-4 py-1.5 text-sm rounded-sm font-medium text-white border-2 border-[#333] bg-[#333] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#333]'>Sign
                    In</button>
                </li>
                <li id="toggle" class='lg:hidden'>
                  <button>
                    <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </header>
    
    <div id="collapseMenu" class='flex flex-wrap items-center px-10 py-3 bg-[#333] relative min-h-[46px] max-lg:hidden'>
      <ul class='flex justify-center lg:space-x-4 max-lg:space-y-3 w-full max-lg:block'>
        <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            class='lg:hover:text-yellow-300 text-yellow-300 text-[15px] font-medium block'>New</a></li>
        <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>Brands</a></li>
        <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>Makeup</a></li>
        <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>Hair</a></li>
        <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>Tools & Brushes</a></li>
        <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>Bath & body</a></li>
        <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>Clean Body</a></li>
        <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>Gifts</a></li>
        <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            class='lg:hover:text-yellow-300 text-white text-[15px] font-medium block'>Skincare</a></li>
      </ul>
    </div>
    
    
    
    
    
    
    
    
    
    
  </>

  )
}


export default Header;