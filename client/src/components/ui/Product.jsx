import { Link, useNavigate } from 'react-router-dom';

function Product(props) {
   const navigate = useNavigate();

   const truncate = (str, maxLength) => {
      return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
   };
   const truncatedDescription = truncate(props.description, 35);

   return (
      <div className='stall'>
         <Link className='stall__details' to={`/market/${props.store}`}>
            <img
               src={props.image}
               alt='product image'
               className='stall__image'
            />
            <div className='stall__details-item'>
               <h2 className='item-name'>{props.name}</h2>
               <span className='item-price'>${props.price}</span>
            </div>
            <p className='stall__details-desc'>{truncatedDescription}</p>
         </Link>
         {/* <button className='stall__btn'>add to basket</button> */}
      </div>
   );
}

export default Product;
