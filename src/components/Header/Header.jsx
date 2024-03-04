import React, { useState, useEffect } from 'react'

import { NavLink, Link } from "react-router-dom";
import { useCart } from 'react-use-cart';
import { useLocation } from 'react-router-dom';
import './Header.css';
import { MdStars } from "react-icons/md";
import { BsSearch, BsPerson } from "react-icons/bs";
import { FaApple, FaPhoneAlt } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { BsBox2 } from "react-icons/bs";
import { GiEyelashes } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { GrDropbox } from "react-icons/gr";
import { CiApple } from "react-icons/ci";
import { PiCookingPotBold } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiTelevisionSimple } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
import { PiTShirt } from "react-icons/pi";
import { LuBaby } from "react-icons/lu";
import { IoIosArrowDown, IoIosHelpCircleOutline } from "react-icons/io";import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMarkChatRead } from "react-icons/md";
import { LuTicket } from "react-icons/lu";



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalUniqueItems}= useCart()


  const location = useLocation()

    const [showNavBar, setShowNavBar] = useState()

    useEffect(()=> {
        console.log('this is location', location)
        if (location.pathname === '/') {
            setShowNavBar('d-flex d-lg-none ')
        } else {
            setShowNavBar('d-flex')
        }
    },[location])

    





    const [show, useShow] = useState('d-none')
    const [show1, useShow1] = useState('d-none')
    const [show2, useShow2] = useState('d-none')
    const [show3, useShow3] = useState('d-none')
    const [show4, useShow4] = useState('d-none')
    const [show5, useShow5] = useState('d-none')
    const [show6, useShow6] = useState('d-none')
    const [show7, useShow7] = useState('d-none')
    const [show8, useShow8] = useState('d-none')
    const [show9, useShow9] = useState('d-none')
    const [show10, useShow10] = useState('d-none')
    const [show11, useShow11] = useState('d-none')
    const [show12, useShow12] = useState('d-none')
    const [show13, useShow13] = useState('d-none')

  
  
    function showContent() {
        useShow('d-block')
    }
  
    const hideContent = () => {
      useShow('d-none')
    }
  
    function showContent1() {
      useShow1('d-block')
  }
  
  const hideContent1 = () => {
    useShow1('d-none')
  }
  
  function showContent2() {
    useShow2('d-block')
  }
  
  const hideContent2 = () => {
  useShow2('d-none')
  }
  
  function showContent3() {
    useShow3('d-block')
  }
  
  const hideContent3 = () => {
  useShow3('d-none')
  }
  
  function showContent4() {
    useShow4('d-block')
  }
  
  const hideContent4 = () => {
  useShow4('d-none')
  }
  
  function showContent5() {
    useShow5('d-block')
  }
  
  const hideContent5 = () => {
  useShow5('d-none')
  }
  
  function showContent6() {
    useShow6('d-block')
  }
  
  const hideContent6 = () => {
  useShow6('d-none')
  }
  
  function showContent7() {
    useShow7('d-block')
  }
  
  const hideContent7 = () => {
  useShow7('d-none')
  }
  
  function showContent8() {
    useShow8('d-block')
  }
  
  const hideContent8 = () => {
  useShow8('d-none')
  }
  
  function showContent9() {
    useShow9('d-block')
  }
  
  const hideContent9 = () => {
  useShow9('d-none')
  }
  
  function showContent10() {
    useShow10('d-block')
  }
  
  const hideContent10 = () => {
  useShow10('d-none')
  }
  
  function showContent11() {
    useShow11('d-block')
  }
  
  const hideContent11 = () => {
  useShow11('d-none')
  }
  
  function showContent13() {
    
    useShow13('d-none d-lg-block')

  }
  
  const hideContent13 = () => {
    setTimeout(()=>{
      useShow13('d-none ')
    }, 2000)
  }
  






  return (
    <div className=''>
      <header className="header-middle-strip px-5">
          <div className="container-xxl">
            <div className="row d-flex align-items-center justify-content-center ">
              <div className="col-3 px-5" style={{color: '#f68b1e'}}>
                <MdStars width={16} height={16} className='m-1' />
                <span style={{fontSize: '.75rem', fontWeight: '600' }}>Sell on Jumia</span>
              </div>
              <div className="col-6 text-center">
                <img className='img-fluid me-3' width={67} height={20} src="../public/Jumia-Logo.png" alt="" />
                <img className='img-fluid me-3 jusz' width={67} height={20} src="src/components/Cards/images/JumiaPay-removebg-preview.png" alt="" />
              </div>
              <div className="col-3 text-center" style={{color: '#f68b1e'}}>
                
              </div>
            </div>
          </div>
      </header>
      <div className=''>
      <header className="header-bottom-strip px-5 ">
          <div className="container-xxl ">
            <div className="row d-flex align-items-center menu-main  ">
              
              <div className="col-3 px-5 d-flex align-items-center position-relative">
                <div className={`menu mb-0 ${showNavBar}`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation"  onMouseEnter={showContent13} onMouseLeave={hideContent13}>
                  <span className=''></span>
                  <span></span>
                  <span></span>

                  <div class="offcanvas offcanvas-start w-75 p-2 d-lg-none" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div class="d-flex align-items-center">
                      <div type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></div>
                      <div class="offcanvas-title ms-" id="offcanvasNavbar2Label">
                        <Link to={'/'}>
                          <img className='img-fluid ' width={100} height={22} src="../public/Jumia-Logo.png" alt="" />
                        </Link>
                    </div>
                  </div>
                  <div className='offcanvas-body'>
                  <div className='big-dawgs'>
                    <div className='straight'></div>
                    <h4 className='ps-2 py-2'>NEED HELP</h4>
                    <div className='straight'></div>
                    <h4 className='ps-2 py-2'>MY JUMIA ACCOUNT</h4>
                  </div>
                  <div class="ms-3">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                    
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><BsBox2 className='me-1'/>Orders</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><MdOutlineMarkChatRead className='me-1'/>Pending Review</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><LuTicket className='me-1'/>Voucher</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><FaRegHeart className='me-1'/>Saved Items</a>
                      </li>
                    </ul>
                    
                  </div>

                  <div className='big-dawgs'>
                    <div className='straight'></div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h4 className='ps-2 py-2'>OUR CATEGORIES</h4>
                      <h6>See all</h6>
                    </div>
                  </div>
                  <div class="ms-3">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                    
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/"><IoPhonePortraitOutline className='me-1'/>Phones & Tablets</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><PiCookingPotBold className='me-1'/>Appliances</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><PiTelevisionSimple className='me-1'/>Electronics</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><GiEyelashes className='me-1'/>Beauty</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><GoHome className='me-1'/>Home & Office</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><uBaby className='me-1'/>Baby Products</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><CiDumbbell className='me-1'/>Sporting Goods</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><PiTShirt className='me-1'/>Fashion</a>
                      </li> 
                    </ul>
                    
                  </div>
                  <div className='big-dawgs'>
                    <div className='straight'></div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h4 className='ps-2 py-2'>OUR SERVICES</h4>
                      <h6>See all</h6>
                    </div>
                  </div>
                  <div class="ms-3">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                    
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><MdStars className='me-1'/>J-Force</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><MdStars className='me-1'/>Pay Airtime Bills</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><MdStars className='me-1'/>Pay Electricity Bills</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><MdStars className='me-1'/>Pay Internet Bills</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><MdStars className='me-1'/>Buy Data</a>
                      </li>
                    </ul>
                    
                  </div>
                  <div className='big-dawgs'>
                    <div className='straight'></div>
                    <h5 className='ps-2 py-2'>Sell on Jumia</h5>
                    <h5 className='ps-2 py-2'>Service Center</h5>
                    <h5 className='ps-2 py-2'>Contact us</h5>
                  </div>
                 </div>
                 
                  </div>
                  <div className={`navigation  position-absolute ${show13}`} onMouseEnter={showContent13} onMouseLeave={hideContent13}>
            <div className='links mx-0 '>
              <Link to='/category' href="" onMouseEnter={showContent} onMouseLeave={hideContent} className='text-reset'><div className='icon1'><CiApple /></div> Supermarket</Link>
              <Link to='/category' href="" onMouseEnter={showContent1} onMouseLeave={hideContent1} className='text-reset'><div className='icon1'><GiEyelashes /></div> Health & Beauty</Link>
              <Link to='/category' href="" onMouseEnter={showContent2} onMouseLeave={hideContent2} className='text-reset'><div className='icon1'><GoHome /></div>Home & Office</Link>
              <Link to='/category' href="" onMouseEnter={showContent3} onMouseLeave={hideContent3} className='text-reset'><div className='icon1'><PiCookingPotBold /></div>Appliances</Link>
              <Link to='/category' href="" onMouseEnter={showContent4} onMouseLeave={hideContent4}className='text-reset'><div className='icon1'><IoPhonePortraitOutline /></div>Phones & Tablet</Link>
              <Link to='/category' href="" onMouseEnter={showContent5} onMouseLeave={hideContent5} className='text-reset'><div className='icon1'><HiOutlineDesktopComputer /></div>Computing</Link>
              <Link to='/category' href="" onMouseEnter={showContent6} onMouseLeave={hideContent6} className='text-reset'><div className='icon1'><PiTelevisionSimple /></div>Electronics</Link>
              <Link to='/category' href="" onMouseEnter={showContent7} onMouseLeave={hideContent7} className='text-reset'><div className='icon1'><PiTShirt /></div>Fashion</Link>
              <Link to='/category' href="" onMouseEnter={showContent8} onMouseLeave={hideContent8} className='text-reset'><div className='icon1'><LuBaby /></div>Baby Product</Link>
              <Link to='/category' href="" onMouseEnter={showContent9} onMouseLeave={hideContent9} className='text-reset'><div className='icon1'><IoGameControllerOutline /></div>Gaming</Link>
              <Link to='/category' href=""onMouseEnter={showContent10} onMouseLeave={hideContent10} className='text-reset'><div className='icon1'><CiDumbbell /></div>Sporting Goods</Link>
              <Link to='/category' href=""onMouseEnter={showContent11} onMouseLeave={hideContent11} className='text-reset'><div className='icon1'><HiOutlineDotsCircleHorizontal /></div>Other categories</Link>
            </div>
            <div className={`position-absolute second-1 ${show}`} onMouseEnter={showContent} onMouseLeave={hideContent} >
                        <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second-1 ${show1}`} onMouseEnter={showContent1} onMouseLeave={hideContent1}>
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second-1 ${show2}`} onMouseEnter={showContent2} onMouseLeave={hideContent2}>
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second-1 ${show3}`} onMouseEnter={showContent3} onMouseLeave={hideContent3}>
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second-1 ${show4}`} onMouseEnter={showContent4} onMouseLeave={hideContent4}>
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second-1 ${show5}`} onMouseEnter={showContent5} onMouseLeave={hideContent5}>
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second-1 ${show6}`} onMouseEnter={showContent6} onMouseLeave={hideContent6}>
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            
            </div>
            <div className={`position-absolute second-1 ${show7}`} onMouseEnter={showContent7} onMouseLeave={hideContent7}>
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div  className={`position-absolute second-1 ${show8}`}onMouseEnter={showContent8} onMouseLeave={hideContent8} >
                no8
            </div>
            <div className={`position-absolute second-1 ${show9}`} onMouseEnter={showContent9} onMouseLeave={hideContent9}>
                no9
            </div>
            <div className={`position-absolute second-1 ${show10}`} onMouseEnter={showContent10} onMouseLeave={hideContent10}>
                no10
            </div>
            <div className={`position-absolute second-1 ${show11}`} onMouseEnter={showContent11} onMouseLeave={hideContent11}>
                no 11
            </div>
            <div className={`position-absolute second-1 ${show12}`} >
                no 12
            </div>
          </div>



                </div>
                <div>
                  <Link to={'/'}>
                    <img className='img-fluid logo' width={140} height={32} src="../public/Jumia-Logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                  <div className="input-group">
                      <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
                      <input type="text" className="form-control" placeholder="Search Products, brands and categories" aria-label="Search Products, brands and categories" aria-describedby="basic-addon2" />
                  </div>
                  <button type="button" className="btn fw-semibold text-white">SEARCH</button>
              </div>
              <div className="col-3">
                <div className="header-bottom-links d-flex align-items-center justify-content-end">
                  <div className='g-10 d-flex align-items-center'>
                    <Link className='me-2 d-flex align-items-center text-dark link-text'>
                      <BsPerson size={32} className='link-icons'/>
                      <p className='link-text mb-0 fw-semibold'>Account</p>
                      <IoIosArrowDown className='link-arrow-down' />
                    </Link>

                    <Link className='me-2 d-flex align-items-center text-dark link-text'>
                      <IoIosHelpCircleOutline size={32}/>
                      <p className='link-text mb-0 fw-semibold'>Help</p>
                      <IoIosArrowDown />
                    </Link>
                    <Link className='me-2 d-flex align-items-center text-dark link-text' to='/cart'>
                      <div className='position-relative'>
                      <div className={`unique p-1 rounded-circle position-absolute ${totalUniqueItems === 0 ? 'd-none': 'd-block'}`}>{totalUniqueItems}</div>
                      <IoCartOutline size={32} className='link-icons '/>
                      </div>
                      <p className='link-text mb-0 fw-semibold '>Cart</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row search-button">
              <div className="col-12 mb-2 w-100">
                  <div className="input-group search-bar">
                      <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
                      <input type="text" className="form-control" placeholder="Search Products, brands and categories" aria-label="Search Products, brands and categories" aria-describedby="basic-addon2" />
                  </div>
              </div>
            </div>
          </div>
      </header>
      </div>




      
      
      


    </div>
  )
}

export default Header