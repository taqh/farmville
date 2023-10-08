import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { useContext, useState } from 'react';
import NavToggle from './NavToggle';
import logo from '/logo.png'
import { GiFruitBowl } from 'react-icons/gi';

function Navigation() {
   const [showMenu, setShowMenu] = useState(false);
   const { userData } = useContext(UserContext);
   const location = useLocation();
   const isLoggingIn = location.pathname.substring(1) === 'login';
   const { loginStatus } = userData;
   const navigate = useNavigate();
   return (
      <>
         <a className='skip-to-content' href='#main'>
            Skip to main content
         </a>
         <header>
            <div className='header'>
               {loginStatus ? (
                  <Link to='/explore' className='logo'>
                     <img src={logo}/>
                  </Link>
               ) : (
                  <Link to='/' className='logo'>
                     <img src={logo}/>
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
                        <>
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
                        <li>
                           <NavLink
                              to='/account'
                              className={({ isActive }) =>
                                 isActive ? 'link--active' : 'link'
                              }
                              end
                              onClick={() => setShowMenu(!showMenu)}
                           >
                              Account
                           </NavLink>
                        </li>
                        
                        </>
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
                     {loginStatus && (
                        <button className='basket-btn' onClick={() => navigate('/basket')}>
                           <span className='sr-only'>View cart</span>
                           <GiFruitBowl size='24' aria-hidden='true' />
                           Basket
                        </button>
                     )}
                  </ul>
               </nav>
            </div>
         </header>
      </>
   );
}

export default Navigation;
