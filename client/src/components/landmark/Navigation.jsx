import { Link, NavLink, useLocation } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { useContext, useState } from 'react';
import NavToggle from './NavToggle';
import basket from '../../assets/basket.svg'
function Navigation() {
   const [showMenu, setShowMenu] = useState(false);
   const { userData } = useContext(UserContext);
   const location = useLocation();
   const isLoggingIn = location.pathname.substring(1) === 'login';
   const { loginStatus } = userData;

   return (
      <>
         <a className='skip-to-content' href='#main'>
            Skip to main content
         </a>
         <header>
            <div className='header'>
               {loginStatus ? (
                  <Link to='/home' className='logo'>
                     farmville
                  </Link>
               ) : (
                  <Link to='/' className='logo'>
                     farmville
                  </Link>
               )}
               <span className='blur' aria-hidden='true'></span>
               <nav>
                  <NavToggle
                     onToggle={showMenu}
                     onClick={() => setShowMenu(!showMenu)}
                  />
                  <ul
                     data-visible={showMenu}
                     className='header__nav'
                     id='primary-navigation'
                  >
                     {loginStatus && (
                        <li>
                           <NavLink
                              to='/market'
                              className={({ isActive }) =>
                                 isActive ? 'link--active' : 'link'
                              }
                              end
                              onClick={() => setShowMenu(!showMenu)}
                           >
                              Market
                           </NavLink>
                        </li>
                     )}
                     {!loginStatus && (
                        <>
                           <li>
                              <NavLink
                                 to='/about'
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
                                 to='/services'
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
                                 to='/contact'
                                 className={({ isActive }) =>
                                    isActive ? 'link--active' : 'link'
                                 }
                                 onClick={() => setShowMenu(!showMenu)}
                              >
                                 Contact
                              </NavLink>
                           </li>
                           <Link
                              to='/login'
                              className='login-btn'
                              onClick={() => setShowMenu(!showMenu)}
                           >
                              Login
                           </Link>
                        </>
                     )}
                     {loginStatus && 
                        <button>
                           <img src={basket} className='cart'/>
                        </button>
                     }
                  </ul>
               </nav>
            </div>
         </header>
      </>
   );
}

export default Navigation;
