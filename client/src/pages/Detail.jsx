import { useNavigate, useParams, Link } from 'react-router-dom';
import { Arrow, Location } from '../components/ui/icons';
import { GiBarn } from 'react-icons/gi';
function Detail() {
   const params = useParams();
   const navigate = useNavigate();

   return (
      <>
         <div className='container product-details'>
            <button onClick={() => navigate('/market')} className='back-btn'>
               <Arrow aria-hidden='true' />
               <span>back to market</span>
            </button>

            <div className='item-detail'>
               <div className='item-detail__image'>
                  <img
                     src='https://images.unsplash.com/photo-1559740509-29a16cfbb278?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80'
                     alt='product image'
                     className='product__image'
                  />
               </div>

               <div className='item-detail__description'>
                  <h1 className='item__name'>Organic Apples</h1>

                  <div className='item__price'>
                     <span className='product-name'>Basket</span>
                     <span>$200</span>
                  </div>

                  <div className='farm-details'>
                     <div className='farm-details--name'>
                        {/* <GiBarn size='25' aria-hidden='true' /> */}
                        <span>Green Acres Farm</span>
                     </div>
                     <button className='farm-details--location'>
                        <Location aria-hidden='true' />
                        <span>visit farm</span>
                     </button>
                  </div>

                  <p className='item__desc'>
                     Indulge in the natural goodness of our fresh, organic
                     apples, meticulously grown with utmost care and dedication.
                     Our commitment to sustainable farming practices ensures
                     that every bite of our apples is a delightful journey into
                     pure, unadulterated flavor.
                  </p>
                  <div className='actions'>
                     <button className='detail-btn'>add to basket</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Detail;
