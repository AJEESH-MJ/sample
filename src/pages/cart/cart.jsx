import React from 'react';
import { Link } from 'react-router-dom';
import { P1, P2, P3 } from '../../assets/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './cart.css';

const Cart = () => {
  const handleDelete = () => {
    // Functionality to handle delete button click
    console.log('Delete button clicked');
  };

  return (
    <main className="cart-page bg-gray-100 min-h-screen p-4">
      <section className="cart max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 mt-36">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h2>
        <div className="table-responsive">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-3 text-left">Product</th>
                <th className="py-3 text-center">Price</th>
                <th className="py-3 text-center">Quantity</th>
                <th className="py-3 text-center">Total</th>
                <th className="py-3 text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center space-x-4">
                  <img src={P1} alt="Product" className="w-16 h-16 object-contain" />
                  <div>
                    <p className="font-semibold">Graphic Tees</p>
                    <p className="text-gray-600">Size: M</p>
                  </div>
                </td>
                <td className="text-center">$9.99</td>
                <td className="text-center">
                  <div className="flex justify-center items-center space-x-2">
                    <button className="bg-red-500 text-white font-bold hover:bg-red-600 px-3 py-1 rounded-l">
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input type="number" value={1} className="w-16 h-8 border border-gray-300 text-center" />
                    <button className="bg-green-500 text-white font-bold hover:bg-green-600 px-3 py-1 rounded-r">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </td>
                <td className="text-center">$9.99</td>
                <td className="text-center">
                  <button
                    className="text-red-500 font-bold hover:text-red-600"
                    onClick={handleDelete}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="flex items-center space-x-4">
                  <img src={P2} alt="Product" className="w-16 h-16 object-contain" />
                  <div>
                    <p className="font-semibold">Graphic Tees</p>
                    <p className="text-gray-600">Size: M</p>
                  </div>
                </td>
                <td className="text-center">$19.99</td>
                <td className="text-center">
                  <div className="flex justify-center items-center space-x-2">
                    <button className="bg-red-500 text-white font-bold hover:bg-red-600 px-3 py-1 rounded-l">
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input type="number" value={2} className="w-16 h-8 border border-gray-300 text-center" />
                    <button className="bg-green-500 text-white font-bold hover:bg-green-600 px-3 py-1 rounded-r">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </td>
                <td className="text-center">$19.99</td>
                <td className="text-center">
                  <button
                    className="text-red-500 font-bold hover:text-red-600"
                    onClick={handleDelete}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="flex items-center space-x-4">
                  <img src={P3} alt="Product" className="w-16 h-16 object-contain" />
                  <div>
                    <p className="font-semibold">Graphic Tees</p>
                    <p className="text-gray-600">Size: M</p>
                  </div>
                </td>
                <td className="text-center">$29.99</td>
                <td className="text-center">
                  <div className="flex justify-center items-center space-x-2">
                    <button className="bg-red-500 text-white font-bold hover:bg-red-600 px-3 py-1 rounded-l">
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input type="number" value={1} className="w-16 h-8 border border-gray-300 text-center" />
                    <button className="bg-green-500 text-white font-bold hover:bg-green-600 px-3 py-1 rounded-r">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </td>
                <td className="text-center">$29.99</td>
                <td className="text-center">
                  <button
                    className="text-red-500 font-bold hover:text-red-600"
                    onClick={handleDelete}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
              {/* Other cart items */}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center mt-8">
          <div className="flex items-center mb-4">
            <p className="text-xl font-semibold">Subtotal:</p>
            <p className="text-xl ml-2">$99.96</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <Link
                to="/Y-BRO-Clothings/home"
                className="text-red-500 font-bold hover:text-red-600 mb-4 md:mb-0"
              >
                Continue Shopping
              </Link>
              <Link
                to="/checkout"
                className="bg-blue-500 text-white py-2 px-4 rounded font-bold hover:bg-blue-600"
              >
                Checkout
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
};

export default Cart;
