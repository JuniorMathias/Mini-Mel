import { FaPercentage, FaTruck, FaCreditCard, FaShoppingCart } from 'react-icons/fa';

function MessageList() {

  return (
    <>
      <section className="flex justify-around items-center py-8 bg-gray-100">
        <div className="text-center">
          <FaPercentage className="text-4xl text-blue-500 mb-2 mx-auto" />
          <p className="text-lg">5% na primeira compra</p>
        </div>
        <div className="text-center">
          <FaTruck className="text-4xl text-blue-500 mb-2 mx-auto" />
          <p className="text-lg">Entrega: Correios</p>
        </div>
        <div className="text-center">
          <FaCreditCard className="text-4xl text-blue-500 mb-2 mx-auto" />
          <p className="text-lg">Parcelamos em até 5x</p>
        </div>
        <div className="text-center">
          <FaShoppingCart className="text-4xl text-blue-500 mb-2 mx-auto" />
          <p className="text-lg">Atacado a partir de 15 peças</p>
        </div>
      </section>
    </>
  );
}

export default MessageList;
