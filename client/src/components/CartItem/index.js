import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = e => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="flex items-center">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div className="ml-4">
        <div>
          {item.name}, ${item.price}
        </div>
        <div className="flex items-center">
          <span>
            <span>Qty:</span>
            <input
              type="number"
              placeholder="1"
              value={item.purchaseQuantity}
              onChange={onChange}
              className="w-12 py-1 px-2 border border-gray-300 rounded"
            />
          </span>
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            className="pb-5 ml-2 text-gray-500 cursor-pointer hover:text-gray-700 "
          >
            <FaTrash />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
