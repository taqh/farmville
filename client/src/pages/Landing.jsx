import turbine from '../assets/turbine.svg';
import groceries from '../assets/groceries.svg';
function Landing() {
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
               <h2>Features</h2>
               <p>
                  A clean and simple interface to organize your favourite
                  websites. Open a new browser tab and see your sites load
                  instantly. Try it for free.
               </p>
            </div>

            <ul className='features__tab' role='tablist'>
               <button
                  className='features__tab-btn'
                  aria-selected='true'
                  role='tab'
               >
                  Select
               </button>
               <button
                  className='features__tab-btn'
                  aria-selected='false'
                  role='tab'
               >
                  Pre-order
               </button>
               <button
                  className='features__tab-btn'
                  aria-selected='false'
                  role='tab'
               >
                  Fast delivey
               </button>
            </ul>

            <div role='tabpanel' className='features__details'>
               <img src={groceries} className='feature-image' />
               <article>
                  <h3>Set your Preferences</h3>
                  <p>
                     Organize your bookmarks however you like. Our simple
                     drag-and-drop interface gives you complete control over how
                     you manage your favourite sites.
                  </p>
               </article>
            </div>
         </section>
         <footer></footer>
      </>
   );
}

export default Landing;
