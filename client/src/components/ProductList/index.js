import React, { useEffect, useState, useCallback } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList({ searchTerm }) {
  const [state, dispatch] = useStoreContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { currentCategory, products } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const filterProducts = useCallback(() => {
    let filtered = products;
    if (currentCategory) {
      filtered = filtered.filter(
        (product) => product.category._id === currentCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [currentCategory, products, searchTerm]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts([]);
    } else {
      filterProducts();
    }
  }, [searchTerm, filterProducts]);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {searchTerm !== "" && filteredProducts.length ? (
        <div className="flex-row">
          {filteredProducts.map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : searchTerm !== "" ? (
        <h3>No products found.</h3>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
