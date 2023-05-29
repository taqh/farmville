import groceries from '../assets/groceries.svg';
import delivery from '../assets/delivery.svg';
import turbine from '../assets/turbine.svg';
import cart from '../assets/empty-cart.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const tabs = ['first', 'second', 'third'];
function Landing() {
   const [activeTab, setActiveTab] = useState(tabs[0]);

   useEffect(() => {
      const currentTab = tabs.findIndex((tab) => tab === activeTab);
      const timeout = setTimeout(() => {
         setActiveTab(() => {
            const nextTab = (currentTab + 1) % tabs.length;
            return tabs[nextTab];
         });
      }, 15000);

      return () => clearTimeout(timeout);
   }, [activeTab]);

   return (
      <>
         <section className='hero'>
            <article className='hero__description'>
               <h1 className='hero__heading'>
                  Get the best agricultural produce fresh from farms close to
                  you
               </h1>
               <p>
                  Our platform matches farm owners with companies willing to
                  provide them with the tools they need to succeed. From
                  fertilizers to fully functional irrigation systems, Farmville
                  makes it easy to grow agricultural businesses.
               </p>
               <div className='hero__action'>
                  <button className='action-btn'>Get Started</button>
                  <button className='action-btn'>Explore Services</button>
               </div>
            </article>
            <div className='hero__illustration'>
               <img src={turbine} />
            </div>
         </section>

         <section className='features'>
            <div className='features__header'>
               <h2>Services</h2>
               <p>
                  Our aim is to make it quick and easy for farmers to access
                  companies looking to invest and provide them with the tools to
                  improve their business. And also connect consumers that need
                  to make large purchase of farm product.
               </p>
            </div>

            <ul className='features__tab' role='tablist'>
               <button
                  className='features__tab-btn'
                  aria-selected={activeTab === 'first'}
                  role='tab'
                  onClick={() => setActiveTab('first')}
               >
                  Consumers
               </button>
               <button
                  className='features__tab-btn'
                  aria-selected={activeTab === 'second'}
                  role='tab'
                  onClick={() => setActiveTab('second')}
               >
                  Farmers
               </button>
               <button
                  className='features__tab-btn'
                  aria-selected={activeTab === 'third'}
                  role='tab'
                  onClick={() => setActiveTab('third')}
               >
                  Establishments
               </button>
            </ul>

            {activeTab === 'first' && (
               <div role='tabpanel' className='features__details'>
                  <div className='feature-image'>
                     <img src={groceries} className='image' />
                  </div>

                  <article className='feature__desc'>
                     <h3>Just in time</h3>
                     <p>
                        Place your order for your required amount of items
                        before havesting season.
                     </p>
                     <Link to='/services' className='learn-more'>
                        Learn more
                     </Link>
                  </article>
               </div>
            )}

            {activeTab === 'second' && (
               <div role='tabpanel' className='features__details'>
                  <div className='feature-image'>
                     <img src={cart} className='image' />
                  </div>

                  <article className='feature__desc'>
                     <h3>Avoid perished goods</h3>
                     <p>
                        Get your perishables sold just as they&apos;re available to
                        avoid losses
                     </p>
                     <Link to='/services' className='learn-more'>
                        Learn more
                     </Link>
                  </article>
               </div>
            )}

            {activeTab === 'third' && (
               <div role='tabpanel' className='features__details'>
                  <div className='feature-image'>
                     <img src={delivery} className='image' />
                  </div>

                  <article className='feature__desc'>
                     <h3>Invest confidently</h3>
                     <p>
                        Our powerful search feature will help you find trusted
                        farms in no time at all. No need to trawl through the
                        market yourself.
                     </p>
                     <Link to='/services' className='learn-more'>
                        Learn more
                     </Link>
                  </article>
               </div>
            )}
         </section>

         <section className='section'>
            <div>

            </div>
         </section>
      </>
   );
}

export default Landing;
