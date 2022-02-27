import React, {useState} from 'react';
import { NavLink , Link } from 'react-router-dom';
import './Header.css';
import './Navbar.css';
import Al from "../al.ttf";
import air0 from '../img/air0.png';
import cloud5 from '../img/cloud5.png';
import cloud4 from '../img/cloud4.png';
import cloud1 from '../img/cloud1.png';
import cloud3 from '../img/cloud3.png';
import cloud2 from '../img/cloud2.png';
import cur9 from '../img/cur9.png';

const Header = () => {
  const [manuClick, manusetClick] = useState(false);
  const menuIconChange = () => manusetClick(!manuClick);
  const closeMobileMenu = () => manusetClick(false);

  const [subnavClick, subnavsetClick] = useState(false);
  const subnavIconChange = () => subnavsetClick(!subnavClick);
  const closesubnav = () => subnavsetClick(false);

  const [searchClick, searchsetClick] = useState(false);
  const searchIconChange = () => searchsetClick(!searchClick);
  const closesearch = () => searchsetClick(false);

  const clsSubnavOnscroll = () => {
    if(window.scrollY >= 200) {
       subnavsetClick(false)
    } else {
       subnavsetClick(false)
    }
  };
  window.addEventListener('scroll', clsSubnavOnscroll);

  const clsSearchOnscroll = () => {
   if(window.scrollY >= 200) {
      searchsetClick(false)
   } else {
      searchsetClick(false)
   }
  };
  window.addEventListener('scroll', clsSearchOnscroll);

  const changeNavtcls = () => {
   if(window.scrollY >= 10) {
      manusetClick(false)
   } else {
      manusetClick(false)
   }
 };
 window.addEventListener('scroll', changeNavtcls);


 
  const [navb, setNavb] = useState(false);
  const changeNav = () => {
    if(window.scrollY >= 150) {
       setNavb(true)
    } else {
       setNavb(false)
    }
  };
  window.addEventListener('scroll', changeNav);
  
  const [navbt, setNavbt] = useState(false);
  const changeNavt = () => {
    if(window.scrollY >= 50) {
       setNavbt(true)
    } else {
       setNavbt(false)
    }
  };
  window.addEventListener('scroll', changeNavt);



  const body = document.body;
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
          body.classList.remove(scrollUp);
      return;
    }
      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
          body.classList.remove(scrollUp);
          body.classList.add(scrollDown);
    } else if (
          currentScroll < lastScroll &&
          body.classList.contains(scrollDown)
    ) {
          body.classList.remove(scrollDown);
          body.classList.add(scrollUp);
    }
      lastScroll = currentScroll;
  });






    return(
     <>
      <header className={navbt ? 'header header-sticky' : 'header'} draggable='false'>
         <ul className="cloud-slides">
            <img className='cloud-img'         draggable='false' src={cloud5} alt='Cloud'/>
            <img className='cloud-img cloudz'  draggable='false' src={cloud4} alt='Cloud'/>
            <img className='cloud-img'         draggable='false' src={cloud1} alt='Cloud'/>
            <img className='cloud-img'         draggable='false' src={cloud3} alt='Cloud'/>
            <img className='cloud-img cloudz'  draggable='false' src={cloud2} alt='Cloud'/>

            <img className='cloud-img'         draggable='false' src={cloud5} alt='Cloud'/>
            <img className='cloud-img cloudz'  draggable='false' src={cloud4} alt='Cloud'/>
            <img className='cloud-img'         draggable='false' src={cloud1} alt='Cloud'/>
            <img className='cloud-img'         draggable='false' src={cloud3} alt='Cloud'/>
            <img className='cloud-img cloudz'  draggable='false' src={cloud2} alt='Cloud'/>
         </ul>

         <div className={navbt ? 'head-wrap head-wrap-sticky' : 'head-wrap'}>
            <i className=' heading-i' draggable='false'>PEAKY</i>
            <p className={navbt ? 'heading-p heading-p-sticky' : 'heading-p'} draggable='false'>Knowledge</p>
            <img className={navbt ? 'plane-logo plane-logo-sticky' : 'plane-logo'} src={air0} draggable='false' alt='Airplane'/>
         </div>
         <i onClick={menuIconChange} className={manuClick ? 'fas fa-times menu-icon' : 'fas fa-bars menu-icon'} />



            <nav className={navb ? 'nav-sticky' : 'nav'}>
                  <div className='bothlogo subnav-logo' onClick={subnavIconChange} >
                    <i className={subnavClick ? 'fas fa-compress-alt fa-compress-alt-rotate' : 'fas fa-caret-down'}></i>
                  </div>
                  <input type='search' className={ subnavClick ? 'bothbar subnav-input active' : 'bothbar subnav-input'}
                      placeholder='. . more . .'/>
                  <ul className={ subnavClick ? 'bothdrop subnav-drop active' : 'bothdrop subnav-drop'}>
                   <li className='subnav-li'>
                     <NavLink className='subnav-list' activeClassName='subnavact' onClick={closesubnav} to='/Gallary'>Gallary</NavLink></li>
                   <li className='subnav-li'>
                     <NavLink className='subnav-list' activeClassName='subnavact' onClick={closesubnav} to='/Admin'>Admin</NavLink></li>
                   <li className='subnav-li'>
                     <NavLink className='subnav-list' activeClassName='subnavact' onClick={closesubnav} to='/TextUs'>TextUs</NavLink></li>
                   <li className='subnav-li'>
                     <NavLink className='subnav-list' activeClassName='subnavact' onClick={closesubnav} to='/CallUs'>CallUs</NavLink></li>
                   <li className='subnav-li'>
                     <NavLink className='subnav-list' activeClassName='subnavact' onClick={closesubnav} to='/SignIn'>SignIn</NavLink></li>
                  </ul>


             <ul className={manuClick ? 'nav-menu-active' : 'nav-menu'}>
                 <NavLink to='/Home' className='nav-links'  activeClassName='navlinkact' onClick={closeMobileMenu}>
                    Home
                 </NavLink>
                 <NavLink to='/Video' className='nav-links' activeClassName='navlinkact' onClick={closeMobileMenu}>
                    Video
                 </NavLink>
                 <NavLink to='/Yours' className='nav-links' activeClassName='navlinkact' onClick={closeMobileMenu}>
                    Buy
                 </NavLink>
                 <NavLink to='/Service' className='nav-links' activeClassName='navlinkact' onClick={closeMobileMenu}>
                    Article
                 </NavLink>

                 <div className='subnav-search-tow'>
                    <div>
                    <NavLink className='subnav-link' activeClassName='subnavlinkact' onClick={closeMobileMenu} to='/Gallary'>Gallary</NavLink>
                    <NavLink className='subnav-link' activeClassName='subnavlinkact' onClick={closeMobileMenu} to='/Admin'>Admin</NavLink>
                    <NavLink className='subnav-link' activeClassName='subnavlinkact' onClick={closeMobileMenu} to='/TextUs'>TextUs</NavLink>
                    <NavLink className='subnav-link' activeClassName='subnavlinkact' onClick={closeMobileMenu} to='/CallUs'>CallUs</NavLink>
                    <NavLink className='subnav-link' activeClassName='subnavlinkact' onClick={closeMobileMenu} to='/SignIn'>SignIn</NavLink>
                    </div>
                     <input type='search'className='mobile-search' placeholder='search'/>
                     <ul>
                     <Link class='search-link' onClick={closeMobileMenu} to='/Home'>Pakistan is an islamik state</Link>
                     <Link class='search-link' onClick={closeMobileMenu} to='/Home'>stupid go and sef english</Link>
                     <Link class='search-link' onClick={closeMobileMenu} to='/Home'>stupstustupid go and sef englishpid go and sef englishid go and sef english</Link>
                     </ul>
                 </div>
             </ul>


                  <input type='search' className={ searchClick ? 'bothbar search-input active' : 'bothbar search-input'}
                   placeholder='&nbsp;&nbsp;&nbsp;&nbsp;. . search . .'/>
                  <ul className={ searchClick ? 'bothdrop search-drop active' : 'bothdrop search-drop'}>
                     <div className='search-p null'><Link class='search-list' onClick={closesearch} to='/Home'><span className='search-span'>10 tricks to speack english easily</span></Link></div>
                     <div className='search-p null'><Link class='search-list' onClick={closesearch} to='/Home'><span className='search-span'>iry day fastivle</span></Link></div>
                     <div className='search-p null'><Link class='search-list' onClick={closesearch} to='/Home'><span className='search-span'>the national victiry day fastivle</span></Link></div>
                     <div className='search-p null'><Link class='search-list' onClick={closesearch} to='/Home'><span className='search-span'>osjda jkdhfthe national victiry day fastivle</span></Link></div>
                     <div className='search-p null'><Link class='search-list' onClick={closesearch} to='/Home'><span className='search-span'>thictiry day fastivle</span></Link></div>
                     <div className='search-p null'><Link class='search-list' onClick={closesearch} to='/Home'><span className='search-span'>bangladesh the national victiry day fastivle</span></Link></div>

                      {/* if there are no search result then show the tab below ......
                      as also ive to made the css class null and nothing found if null then dont show the tab
                      */}
                     <div className='search-p nothing-found'><Link class='search-list' onClick={closesearch} to='/Home'><span className='search-span'><center>404</center></span></Link></div>
                      
                  </ul>
                  <div className='bothlogo search-logo' onClick={searchIconChange}>
                     <i className={ searchClick? 'fas fa-compress-alt' : 'fas fa-search' }></i>
                  </div>
            </nav>
       </header>
     </>
    );
}

export default Header;