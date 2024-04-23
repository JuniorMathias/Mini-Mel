import { Link } from 'react-router-dom';
function Modelos() {
  return (
    <>
      <div class="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full text-center">
        <h2 class="text-4xl font-extrabold text-gray-800 mb-12">ESCOLHA POR CATEGORIA</h2>
      </div>
      <section className="flex justify-center items-center">
        <div className="flex space-x-20">
          <div>
             <Link to="/vestidos" class='text-secondary'><img src="https://readymadeui.com/profile_2.webp" class="w-[150px] h-[150px] rounded-full "/> VESTIDOS</Link>
          </div>
          <div>
             <Link to="/conjuntos" class='text-secondary'><img src="https://readymadeui.com/profile_2.webp" class="w-[150px] h-[150px] rounded-full "/>CONJUNTOS </Link>
          </div>
          <div>
             <Link to="/blusas" class='text-secondary'><img src="https://readymadeui.com/profile_2.webp" class="w-[150px] h-[150px] rounded-full "/>BLUSAS</Link>
          </div>
          <div>
             <Link to="/shorts" class='text-secondary'><img src="https://readymadeui.com/profile_2.webp" class="w-[150px] h-[150px] rounded-full "/> SHORTS</Link>
          </div>
          <div>
             <Link to="/macaquinhos" class='text-secondary'><img src="https://readymadeui.com/profile_2.webp" class="w-[150px] h-[150px] rounded-full "/>MACAQUINHOS </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Modelos;