import { Link, useNavigate } from 'react-router-dom';

function Product(props) {
   const navigate = useNavigate();
   const addProduct = () => {
      console.log(props.id);
   };

   return (
      <div className='stall'>
         <img
            src='https://images.unsplash.com/photo-1617235178117-a1f5fecb72bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
            alt='product image'
            className='stall__image'
         />
         <div className='stall__details'>
            <div className='stall__details-item'>
               <Link to={`/market/${props.store}`} className='item-name'>
                  {props.name}
               </Link>
               <span className='item-price'>${props.price}</span>
            </div>
            <div className='stall__details-desc'>product description</div>
         </div>
         <button className='stall__btn' onClick={addProduct}>
            add to basket
         </button>
      </div>
   );
}

export default Product;
