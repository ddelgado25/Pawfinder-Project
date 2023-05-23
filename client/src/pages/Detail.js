import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';


function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  const handleProductClick = (productId) => {
    // Handle the click event by navigating to the product detail page
    console.log('Clicked on product with ID:', productId);
  };

  const otherProducts = products.filter(
    (product) => product.name === currentProduct.name && product._id !== id
  );

  return (
    <>
      {currentProduct && cart ? (
        <div className="container mx-auto my-8">
          <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 block">
            ← Back to Products
          </Link>

          <div className="flex flex-col items-center mb-8">
            <img
              src={`/images/${currentProduct.image}`}
              alt={currentProduct.name}
              className="w-full max-w-2xl mx-auto"
            />
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-0">{currentProduct.name2}</h2>
            <h3 className="text-sm text-gray-600 mb-4">{currentProduct.age} old</h3>

            <p className="text-gray-700 mb-4">{currentProduct.description}</p>

            <p className="flex items-center mb-4">
              <strong className="mr-2">Price:</strong>
              <span className="text-green-600">${currentProduct.price}</span>
              <button
                className="ml-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
                onClick={addToCart}
              >
                Add to Cart
              </button>
              <button
                className="ml-2 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-700"
                disabled={!cart.find((p) => p._id === currentProduct._id)}
                onClick={removeFromCart}
              >
                Remove from Cart
              </button>
            </p>
          </div>

          {otherProducts.length > 0 && (
            <div className="container mx-auto my-8 lg:max-w-5xl">
              <h2 className="text-2xl font-bold mb-4">Other Available {currentProduct.name}s</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {otherProducts.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 relative"
                  >
                    <Link
                      to={`/products/${product._id}`}
                      className="block transition-opacity duration-300"
                    >
                      <img
                        src={`/images/${product.image}`}
                        alt={product.name}
                        className="w-full h-40 object-cover transition-opacity duration-300"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold">{product.name2}</h4>
                        <p>
                          <strong>Price:</strong> ${product.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div >
      ) : null
      }
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
