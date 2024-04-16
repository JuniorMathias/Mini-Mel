import { FaCreditCard, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineDiscount } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbStars } from "react-icons/tb";
function MessageList() {

  return (
    <>
      <section className="flex justify-center items-center py-2  mt-4">
        <div className="text-center">
          <MdOutlineDiscount className="text-4xl text-primary mb-2 mx-auto" />
          <p className="text-lg text-secondary">5% na primeira compra</p>
        </div>
        <div className="text-center ml-4 lg:flex-row">
          <LiaShippingFastSolid className="text-4xl text-primary mb-2 mx-auto" />
          <p className="text-lg text-secondary">Entrega: Correios</p>
        </div>
        <div className="text-center ml-4 lg:flex-row">
          <FaCreditCard className="text-4xl text-primary mb-2 mx-auto" />
          <p className="text-lg text-secondary">Parcelamos em até 5x</p>
        </div>
        <div className="text-center ml-4 lg:flex-row">
          <FaShoppingCart className="text-4xl text-primary mb-2 mx-auto" />
          {/* <TbStars className="text-4xl text-primary mb-2 mx-auto" /> */}
          <p className="text-lg text-secondary">Atacado a partir de 15 peças</p>
        </div>
      </section>
      <section class="flex top-4 justify-center py-2 bg-primary w-1/2 m-auto rounded">
          <strong class="text-white">ATACADO A PARTIR DE 6 PEÇAS</strong>
      </section>
    </>
  );
}

export default MessageList;
