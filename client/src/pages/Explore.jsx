import { Link, useNavigate } from 'react-router-dom';

function Explore() {
   const navigate = useNavigate();
   return (
      <>
         <section className='explore__hero'>
            <h1 className='explore__heading'>
               Explore our market for the best farm produce grown with care by
               your local farmers
            </h1>
            <Link to='/market' className='explore__btn'>
               Visit Market
            </Link>
         </section>

         <div className='container intro__text'>
            <p>
               here to provide{' '}
               <span className='color-effect'>high-quality</span> farm produce,
               while also being
               <span className='color-effect'>
                  {' '}
                  environmentally responsible.
               </span>
            </p>
         </div>

         <section className='categories'>
            <h2>Nourishing Variety</h2>
            <div className='categories__list'>
               <div className='category'>
                  <div className='detail'>
                     <span>Vegetables</span>
                     <Link to='/market' className='category__btn'>
                        Shop now
                     </Link>
                  </div>
               </div>
               <div className='category'>
                  <div className='detail'>
                     <span>Fruits</span>
                     <Link to='/market' className='category__btn'>
                        Shop now
                     </Link>
                  </div>
               </div>
               <div className='category'>
                  <div className='detail'>
                     <span>Tubers</span>
                     <Link to='/market' className='category__btn'>
                        Shop now
                     </Link>
                  </div>
               </div>
               <div className='category'>
                  <div className='detail'>
                     <span>Grains</span>
                     <Link to='/market' className='category__btn'>
                        Shop now
                     </Link>
                  </div>
               </div>
               <div className='category'>
                  <div className='detail'>
                     <span>Poultry</span>
                     <Link to='/market' className='category__btn'>
                        Shop now
                     </Link>
                  </div>
               </div>
               <div className='category'>
                  <div className='detail'>
                     <span>Dairy</span>
                     <Link to='/market' className='category__btn'>
                        Shop now
                     </Link>
                  </div>
               </div>
               <div className='category'>
                  <div className='detail'>
                     <span>Spices</span>
                     <Link to='/market' className='category__btn'>
                        Shop now
                     </Link>
                  </div>
               </div>
               <div className='category'>
                  <div className='detail'>
                     <span>Fishery</span>
                     <Link to='/market' className='category__btn'>
                        Shop now
                     </Link>
                  </div>
               </div>
               <div className='category'>
                  <div className='detail'>
                     <span>Livestock</span>
                     <Link to='/market' className='category__btn'>
                        Shop now
                     </Link>
                  </div>
               </div>
            </div>
         </section>

         <div className='products__showcase'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </>
   );
}

export default Explore;
