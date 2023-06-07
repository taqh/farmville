import groceries from '../assets/groceries.svg';
import success from '../assets/success.svg';
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
                  Discover the Freshest Agricultural Produce Direct from Local
                  Farms
               </h1>
               <p>
                  Step into a world where the finest agricultural treasures
                  await, sourced fresh from farms in close proximity to you. Our
                  platform is dedicated to connecting you with a diverse range
                  of farm owners who passionately cultivate the highest quality
                  produce. Experience the joy of indulging in farm-fresh flavors
                  while supporting local agriculture and fostering a sustainable
                  food ecosystem.
               </p>
               <div className='hero__action'>
                  <Link to='/register' className='action-btn'>Get Started</Link>
                  <Link to='/explore' className='action-btn'>Explore</Link>
               </div>
            </article>
            <div className='hero__illustration'>
               <img src={turbine} />
            </div>
         </section>

         <section className='features'>
            <div className='features__header'>
               <h2>Feature</h2>
               <p>
                  Our aim is to make it quick and easy for farmers to access
                  companies looking to invest and provide them with the tools to
                  grow their business.
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
                  Companies
               </button>
            </ul>

            {activeTab === 'first' && (
               <div role='tabpanel' className='features__details'>
                  <div className='feature-image'>
                     <img src={groceries} className='image' />
                  </div>

                  <article className='feature__desc'>
                     <h3>Experience Delight</h3>
                     <p>
                        Embark on a captivating digital journey through our
                        vibrant online farmplace, a virtual haven where the
                        highest quality farm produce awaits. Immerse yourself in
                        a world of carefully cultivated delights, nurtured by
                        our dedicated local farmers who infuse each harvest with
                        their passion and commitment.
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
                     <h3>Cultivate & Flourish</h3>
                     <p>
                        Through our user-friendly platform, you gain a unique
                        opportunity to share your farming expertise and connect
                        directly with a community of conscious consumers.
                        Whether you cultivate succulent fruits, robust
                        vegetables, or specialty crops, our online farmplace
                        provides a digital stage for you to shine and present
                        your harvest with pride.
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
                     <img src={success} className='image' />
                  </div>

                  <article className='feature__desc'>
                     <h3>Partner with Trusted Farms</h3>
                     <p>
                        Invest with confidence in the future of agriculture.
                        Join Farmville today and discover the transformative
                        power of strategic partnerships with trusted farms,
                        where your investments pave the way for a sustainable,
                        thriving agricultural landscape.
                     </p>
                     <Link to='/services' className='learn-more'>
                        Learn more
                     </Link>
                  </article>
               </div>
            )}
         </section>

         <section className='container'>
            <h1>Empowering Farm Owners for Success</h1>
            <div>
               <p>
                  At Farmville, we understand that thriving agricultural
                  businesses require more than just passion and dedication.
                  That&apos;s why we go the extra mile to match farm owners with
                  reputable companies that provide the essential tools and
                  resources needed for success. From essential fertilizers to
                  state-of-the-art irrigation systems, our platform streamlines
                  the process, making it effortless for farmers to access the
                  tools that fuel their growth and yield exceptional harvests.
               </p>
            </div>
            <div>
               <p>
                  Join our community of farm enthusiasts and agricultural
                  innovators, and embark on a journey where the freshest produce
                  and farming success converge. Experience the transformative
                  power of direct farm-to-table connections, where your support
                  directly impacts local farmers and the communities they
                  nourish. At Farmville, we&apos;re committed to cultivating a
                  sustainable future, one harvest at a time.
               </p>
            </div>
         </section>
      </>
   );
}

export default Landing;
