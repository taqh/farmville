import { useEffect, useState } from 'react';
import Product from '../components/ui/Product';
import { Bars } from '../components/loaders/Loader';

function Market() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [category, setCategory] = useState([]);
   const [filter, setFilter] = useState('All');
   const [filteredProducts, setFilteredProducts] = useState([]);
   const filterButtons = ['All', 'Fruits', 'Poultry', 'Vegetables', 'Dairy', 'Grains', 'Tubers', 'Seafoods'];

   const getProducts = async () => {
      setLoading(true);
      try {
         const response = await fetch(
            'https://serverside-c96b.onrender.com/products'
         );
         const resData = await response.json();
         if (response.ok) {
            setProducts(resData);
            setFilteredProducts(resData);
         }
      } catch (error) {
         throw new Error('an error occured while fetching the data');
      }
      setLoading(false);
   };

   const filterProducts = (category) => {
      console.log(category);
      const newProducts = products.filter(
         (product) => product.category === category
      );
      if (category === 'All') {
         setFilteredProducts(products);
      } else {
         setFilteredProducts(newProducts);
      }
      console.log(newProducts);
      setFilter(category);
   };



   useEffect(() => {
      getProducts();
      return () => {};
   }, []);

   console.log(products);

   return (
      <>
         <div className='container  market'>
            <h1 className='market__heading'>Market</h1>
            <div>
               <p className='filter__heading'>Filter by category</p>
            <div className='filter'>
               {filterButtons.map((button) => (
                  <button
                     key={button}
                     onClick={() => filterProducts(button)}
                     className={`filter__btn ${filter === button ? 'filter__btn--active' : ''}`}
                  >
                     {button}
                  </button>
               ))}
            </div>
            </div>
            <div className='market__stalls'>
               {loading ? (
                  <div className='loading'>
                     <Bars />
                     <h3>loading stalls...</h3>
                  </div>
               ) : (
                  filteredProducts.map((product) => (
                     <Product
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        qty={product.quantity}
                        store={product.farmId}
                        image={product.imageUrl}
                        description={product.description}
                     />
                  ))
               )}
            </div>
         </div>
      </>
   );
}

export default Market;
