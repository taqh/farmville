import { useNavigate, useParams, Link } from 'react-router-dom';

function Detail() {
   const params = useParams();
   const navigate = useNavigate();

   return (
      <>
         <div className='container'>
            <button onClick={() => navigate('/market')} className='back-btn'>
               go back
            </button>
            {/* <Link to='..' relative='path' className='back-btn'>
               Back
            </Link> */}
            <div className='item-detail'>
               <div className='item-detail__image'></div>
               <div className='item-detail__description'>
                  <h1 className='item__name'>Organic Apples</h1>
                  <div className='product__details-title'>
                     <h3 className='product-name'></h3>
                     <span>$200</span>
                  </div>
                  <p>
                     Indulge in the natural goodness of our fresh, organic
                     apples, meticulously grown with utmost care and dedication.
                     Our commitment to sustainable farming practices ensures
                     that every bite of our apples is a delightful journey into
                     pure, unadulterated flavor.
                  </p>
                  <div>
                     <button className='detail-btn'>add to basket</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Detail;
