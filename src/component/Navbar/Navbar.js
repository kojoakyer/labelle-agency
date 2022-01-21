import React,{useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Navbar.css'

function Navbar({location}) {

    const { pathname } = useLocation();
    const [click, setClick] = useState(false)

    const [navbar, setNavbar]= useState(false)

    function handleClick(){
        setClick(!click)
    }

    // function closeMobileMenu () {
    //     setClick(false)
    // }

    function changeNavbarColor (){
        if(window.scrollY >= 100){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbarColor)

  return (
    <>
    <div className={navbar ? 'navbar active' : 'navbar'} style={{ backgroundColor: pathname === '/' || navbar ? 'navbar active' : 'black' }}>
        <div className="left">
            <div className="nav-logo">
                <Link to='/'>
                <img className='photo' src="assets/laBelle-LOGO1.png" alt="" />
                </Link>
            </div>
        </div>
       
        <div className="right">
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link className='nav-links'>about us <i className=' icon fas fa-angle-down'/></Link>
                    <ul className="sub-menu">
                        <li ClassName="nav-item">
                            <Link to='/work' className='sub_nav-links'> -  our work  </Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link className='sub_nav-links'>- company</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link to='/team' className='sub_nav-links'>- team</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link to='/careers' className='sub_nav-links'>- careers</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link to='/gallery' className='sub_nav-links'>- gallery</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className='nav-links'>what we do<i className=' icon fas fa-angle-down'/></Link>
                    <ul className="sub-menu">
                        <li ClassName="nav-item">
                            <Link className='sub_nav-links'>- event management<i className=' icon fas fa-angle-down'/></Link>
                            <ul className='sub-sub-menu'>
                                <li className='nav-item'>
                                    <Link className='sub-sub_nav-links'>- Planning and Execution</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='sub-sub_nav-links'>- Cordination</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='sub-sub_nav-links'>- Staffing</Link>
                                </li>
                            </ul>
                        </li>
                        <li ClassName="nav-item">
                            <Link className='sub_nav-links'>- Project Management<i className=' icon fas fa-angle-down'/></Link>
                            <ul className='sub-sub-menu'>
                                <li>
                                    <Link className='sub-sub_nav-links'>- Branding</Link>
                                </li>
                                <li>
                                    <Link className='sub-sub_nav-links'>- Experiential marketing</Link>
                                </li>
                                <li>
                                    <Link className='sub-sub_nav-links'>- Product Sampling and Brand Ambassadors</Link>
                                </li>
                                <li>
                                    <Link className='sub-sub_nav-links'>- Sponsorship Activation</Link>
                                </li>
                                <li>
                                    <Link className='sub-sub_nav-links'>- Digital marketing</Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li ClassName="nav-item">
                            <Link className='sub_nav-links'>- cordination</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link className='sub_nav-links'>- staffing</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link className='sub_nav-links'>- experiential marketing</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link className='sub_nav-links'>- product sampling and brand ambassadors</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link className='sub_nav-links'>- sponsorship activation</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link className='sub_nav-links'>- digital marketing</Link>
                        </li> */}
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className='nav-links'>events</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-links'>blog</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-links'>Contact us</Link>
                </li>
            </ul>
        </div>
    </div>  
    </>
  )
}

export default Navbar
