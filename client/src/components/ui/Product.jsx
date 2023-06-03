import { Link, useNavigate } from 'react-router-dom';

function Product(props) {
   const navigate = useNavigate();

   const addProduct = () => {
      console.log(props.description.length);
   };

   function truncateString(str, maxLength) {
      return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
   }
   const truncatedDescription = truncateString(props.description, 26);

   return (
      <div className='stall'>
         <img
            src='https://images.unsplash.com/photo-1617235178117-a1f5fecb72bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
            alt='product image'
            className='stall__image'
         />
         <Link className='stall__details' to={`/market/${props.store}`}>
            <div className='stall__details-item'>
               <h2 className='item-name'>{props.name}</h2>
               <span className='item-price'>${props.price}</span>
            </div>
            <p className='stall__details-desc'>{truncatedDescription}</p>
         </Link>
         <button className='stall__btn' onClick={addProduct}>
            add to basket
         </button>
      </div>
   );
}

export default Product;
