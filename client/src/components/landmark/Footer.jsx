import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {
   return (
      <footer>
         <div className='footer'>
            <div className='footer__attribution'>
               <a href='#top' className='logo logo--footer'>
                  farmville
               </a>

               <span className='copy'>© 2023 Farmville</span>
            </div>

            <ul className='footer__support-links'>
               <li>
                  <Link>Team</Link>
               </li>
               <li>
                  <Link>Returns</Link>
               </li>
               <li>
                  <Link>Blog</Link>
               </li>
               <li>
                  <Link>Terms</Link>
               </li>
               <li>
                  <Link>Privacy</Link>
               </li>
            </ul>

            <ul className='footer__social-links'>
               <a href='https://github.com/Dom-iha' target='blank'>
                  <BsGithub size={22} />
               </a>
               <a href='https://github.com/Dom-iha' target='blank'>
                  <BsTwitter size={22} />
               </a>
               <a href='https://github.com/Dom-iha' target='blank'>
                  <BsLinkedin size={22} />
               </a>
            </ul>
         </div>
      </footer>
   );
}

export default Footer;
