import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { BsCart4 } from 'react-icons/bs';
function ProductItem(item) {
  const [state, dispatch] = useStoreContext();
  const {
    image,
    name,
    breed,
    _id,
    price,
    age,
    quantity
  } = item;
  const { cart } = state
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl p-2">
        <Link to={`/products/${_id}`} className="block">
          <div className="h-48">
            <img
              alt={name}
              src={`/images/${image}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <p className="mt-2 text-gray-800 font-semibold">{name}</p>
        </Link>
        <div className="mt-0">
          <p className="text-gray-600"> {breed}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-sm text-gray-600">
            <p>{age}</p>
            </div>
          <span className="text-lg font-semibold text-gray-800">${price}</span>
        </div>
        <button
          onClick={addToCart}
          className="block w-full mt-4 py-2 px-4 bg-custom-green text-white font-semibold rounded-lg shadow-md hover:bg-custom-blue focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-300 ease-in-out flex items-center justify-center"
        >
          <span className="mr-2">
            <BsCart4 size={20} />
          </span>
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default ProductItem;