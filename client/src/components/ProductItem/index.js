import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
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
    <div className="card px-1 py-1 bg-white rounded-xl shadow-md overflow-hidden">
  <Link to={`/products/${_id}`}>
    <div className="h-48">
      <img
        alt={name}
        src={`/images/${image}`}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    <p className="mt-2 text-gray-800 font-semibold">{name}</p>
  </Link>
  <div className="flex justify-between items-center mt-2">
    <div className="text-sm text-gray-600">
      {quantity} {pluralize("item", quantity)} in stock
    </div>
    <span className="text-lg font-semibold text-gray-800">${price}</span>
  </div>
  <button
    onClick={addToCart}
    className="block w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
  >
    Add to cart
  </button>
</div>


  );
}

export default ProductItem;
