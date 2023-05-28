import { Link, NavLink, useLocation } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useContext, useState } from 'react';
import NavToggle from './NavToggle';

function Navigation() {
   const [showMenu, setShowMenu] = useState(false);
   const { loginStatus } = useContext(UserContext);
   const location = useLocation();
   const isLoggingIn = location.pathname.substring(1) === 'login';

   return (
      <>
         <a className='skip-to-content' href='#main'>
            Skip to content
         </a>
         <header>
            <div className='header'>
               <Link to='/' className='logo'>
                  Farmville
               </Link>
               <NavToggle
                  onToggle={showMenu}
                  onClick={() => setShowMenu(!showMenu)}
               />
               <nav>
                  <ul data-visible={showMenu} className='header__nav'>
                     {loginStatus && (
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
                     )}
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
                     <Link
                        to='/login'
                        className='login-btn'
                        onClick={() => setShowMenu(!showMenu)}
                     >
                        Login
                     </Link>
                  </ul>
               </nav>
            </div>
         </header>
      </>
   );
}

export default Navigation;
