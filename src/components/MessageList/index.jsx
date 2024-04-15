import { FaCreditCard, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineDiscount } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbStars } from "react-icons/tb";
function MessageList() {

  return (
    <>
      <section className="flex justify-center items-center py-2 mt-4">
        <div className="text-center">
          <MdOutlineDiscount className="text-4xl text-primary mb-2 mx-auto" />
          <p className="text-lg text-secondary">5% na primeira compra</p>
        </div>
        <div className="text-center ml-4">
          <LiaShippingFastSolid className="text-4xl text-primary mb-2 mx-auto" />
          <p className="text-lg text-secondary">Entrega: Correios</p>
        </div>
        <div className="text-center ml-4">
          <FaCreditCard className="text-4xl text-primary mb-2 mx-auto" />
          <p className="text-lg text-secondary">Parcelamos em até 5x</p>
        </div>
        <div className="text-center ml-4">
          <FaShoppingCart className="text-4xl text-primary mb-2 mx-auto" />
          {/* <TbStars className="text-4xl text-primary mb-2 mx-auto" /> */}
          <p className="text-lg text-secondary">Atacado a partir de 15 peças</p>
        </div>
      </section>
    </>
  );
}

export default MessageList;
