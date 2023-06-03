import connect from '../assets/connect.svg';
import shopping from '../assets/shopping.svg';
import unboxing from '../assets/unboxing.svg';
function About() {
   return (
      <div className='about container'>
         <div className='about__hero'>
            <div>
               <h1 className='about__title'>About Farmville</h1>
               <p className='about__headline'>
                  Through our innovative platform, we aim to create a thriving
                  community where the values of sustainable farming, fresh
                  produce, and fruitful connections flourish.
               </p>
            </div>
         </div>
         <article className='about__section'>
            <div>
               <h2 className='about__heading'>
                  Connecting Farmers and Consumers
               </h2>
               <div className='breifing'>
                  <p>
                     Our platform serves as a vibrant digital marketplace where
                     farmers and consumers seamlessly converge. We provide a
                     dedicated space for passionate farmers to showcase their
                     exceptional produce and connect directly with conscious
                     consumers.
                  </p>
                  <p>
                     By fostering this direct connection, we empower farmers to
                     share their expertise, stories, and the unique qualities of
                     their harvest. Through our platform, farmers can cultivate
                     meaningful relationships with customers who appreciate the
                     true value of their work, resulting in a mutually rewarding
                     experience for both parties.
                  </p>
               </div>
            </div>
            <div className='about__image'>
               <img src={connect} alt='illustration' />
            </div>
         </article>

         <article className='about__section'>
            <div className='about__image'>
               <img src={shopping} alt='illustration' />
            </div>
            <div>
               <h2 className='about__heading'>
                  Convenient Online Shopping Experience
               </h2>
               <div className='breifing'>
                  <p>
                     For discerning consumers seeking the highest quality farm
                     products, our platform offers a convenient and immersive
                     online shopping experience. From the comfort of their
                     homes, consumers can browse through a diverse array of
                     freshly harvested produce, sourced directly from local
                     farmers.
                  </p>
                  <p>
                     With detailed product descriptions and transparent
                     information on farming practices, certifications, and more,
                     our platform enables informed choices. By supporting our
                     platform, consumers enjoy the unparalleled freshness and
                     flavor of farm-to-table goodness while supporting local
                     agriculture and fostering a sustainable food system.
                  </p>
               </div>
            </div>
         </article>

         <article className='about__section'>
            <div>
               <h2 className='about__heading'>
                  Equipment Assistance for Farmers
               </h2>
               <p className='breifing'>
                  We understand that farming requires not only skill and
                  dedication but also the right tools and equipment. That&apos;s
                  why we collaborate with trusted companies to offer farmers the
                  support they need in accessing high-quality farming equipment.
                  Whether it&apos;s advanced machinery, specialized tools, or
                  essential supplies, our platform connects farmers with
                  reliable suppliers who share our commitment to sustainable
                  agriculture. We strive to assist farmers in enhancing their
                  productivity, efficiency, and overall success by providing
                  access to the resources they require to cultivate their land
                  and yield exceptional harvests.
               </p>
            </div>
            <div className='about__image'>
               <img src={unboxing} alt='illustration' />
            </div>
         </article>
      </div>
   );
}

export default About;
