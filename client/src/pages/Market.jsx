import { useEffect, useState } from 'react';
import Product from '../components/ui/Product';
import { Bars } from '../components/loaders/Loader';

function Market() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(false);

   const getProducts = async () => {
      setLoading(true);
      try {
         const response = await fetch(
            'https://serverside-c96b.onrender.com/products'
         );
         const resData = await response.json();
         if (response.ok) {
            setProducts(resData);
         }
      } catch (error) {
         throw new Error('an error occured while fetching the data');
      }
      setLoading(false);
   };
   useEffect(() => {
      getProducts();
      return () => {};
   }, []);

   console.log(products);
   let content;

   if (loading) {
      content = (
         <div className='loading'>
            <Bars />
            <h3>loading stalls...</h3>
         </div>
      );
   } else {
      content = products.map((product) => (
         <Product
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            qty={product.quantity}
            store={product.storeId}
         />
      ));
   }

   return (
      <>
         <div className='container  market'>
            <h1 className='market__heading'>Market</h1>
            <div className='market__stalls'>{content}</div>
         </div>
      </>
   );
}

export default Market;
