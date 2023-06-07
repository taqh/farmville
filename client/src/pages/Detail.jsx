import { useNavigate, useParams, Link } from 'react-router-dom';
import { Arrow, Location } from '../components/ui/icons';
import { GiBarn } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { Bars } from '../components/loaders/Loader';
function Detail() {
   const [details, setDetails] = useState([]);
   const [loading, setLoading] = useState(true);
   const params = useParams();
   const navigate = useNavigate();
   const info = details[0];
   const getDetails = async () => {
      setLoading(true);
      try {
         const response = await fetch(
            `https://serverside-c96b.onrender.com/products?farmId=${params.stall}`
         );
         const resData = await response.json();
         if (response.ok) {
            setDetails(resData);
         }
      } catch (error) {
         throw new Error('an error occured while fetching the data');
      }
      setLoading(false);
   };

   useEffect(() => {
      getDetails();
      return () => {};
   }, []);

   console.log(info);


   return (
      <>
         {loading ? (
            <div className='loading'>
               <Bars />
               <h3>Getting details...</h3>
            </div>
         ) : (
            <div className='container product-details'>
               <Link  to={'..'} relative='path' className='back-btn'>
                  <Arrow aria-hidden='true' />
                  <span>back to market</span>
               </Link>

               <div className='item-detail'>
                  <div className='item-detail__image'>
                     <img
                        src={info.imageUrl}
                        alt='product image'
                        className='product__image'
                     />
                  </div>

                  <div className='item-detail__description'>
                     <h1 className='item__name'>{info.name}</h1>

                     <div className='item__price'>
                        <span className='product-name'>Available</span>
                        <span>${info.price}</span>
                     </div>

                     <div className='farm-details'>
                        <div className='farm-details--name'>
                           <GiBarn size='25' aria-hidden='true' />
                           <span>{info.farmName}</span>
                        </div>
                        <button className='farm-details--location'>
                           <Location aria-hidden='true' />
                           <span>Visit farm</span>
                        </button>
                     </div>

                     <p className='item__desc'>{info.description}</p>
                     <div className='actions'>
                        <button className='detail-btn'>add to basket</button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default Detail;
