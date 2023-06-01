import { Link, useNavigate } from 'react-router-dom';

function Product(props) {
   const navigate = useNavigate();
   const addProduct = () => {
      console.log(props.id);
   };

   return (
      <div className='product'>
         <img src='' alt='product image' className='product__image' />
         <div className='product__details'>
            <div className='product__details-title'>
               <h3 className='product-name'>
                  <Link to={`/market/${props.store}`}>{props.name}</Link>
               </h3>
               <span>${props.price}</span>
            </div>
            <div className='product__details-desc'>product description</div>
         </div>
         <button className='product__btn' onClick={addProduct}>
            add to basket
         </button>
      </div>
   );
}

export default Product;
