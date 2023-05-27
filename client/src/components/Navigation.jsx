import logo from '../assets/react.svg';
import { Link, NavLink } from 'react-router-dom';
import NavToggle from './NavToggle';
import { useState } from 'react';

function Navigation() {
   const [showMenu, setShowMenu] = useState(false);

   return (
      <>
         <a className='skip-to-content' href='#main'>
            Skip to content
         </a>
         <header className='header'>
            <Link to='/' className='logo'>
               Farmville
            </Link>
            <NavToggle
               onToggle={showMenu}
               onClick={() => setShowMenu(!showMenu)}
            />
            <nav>
               <ul data-visible={showMenu} className='header__nav'>
                  <li>
                     <NavLink
                        to='/'
                        className={({ isActive }) =>
                           isActive ? 'link--active' : 'link'
                        }
                        end
                        onClick={() => setShowMenu(!showMenu)}
                     >
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to='/destination'
                        className={({ isActive }) =>
                           isActive ? 'link--active' : 'link'
                        }
                        onClick={() => setShowMenu(!showMenu)}
                     >
                        About
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to='/crew'
                        className={({ isActive }) =>
                           isActive ? 'link--active' : 'link'
                        }
                        onClick={() => setShowMenu(!showMenu)}
                     >
                        Services
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to='/technology'
                        className={({ isActive }) =>
                           isActive ? 'link--active' : 'link'
                        }
                        onClick={() => setShowMenu(!showMenu)}
                     >
                        Features
                     </NavLink>
                  </li>
                  <Link to='/register' className='login'>
                     Login
                  </Link>
               </ul>
            </nav>
         </header>
      </>
   );
}

export default Navigation;
