// import React, { useState } from 'react'
// import '../Navbar/Navbar.css'
// import logo from 'D:/Projects/IndustrialProject/frontend/src/assets/Images/logo.png'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {

//     const [menu, setMenu] = useState('careers')
//     return (
//         <div className='navbar'>
//             <img src={logo} alt="" className="logo" />
//             <div>
//                 <input type="text" name="" id="" />
//                 <button type='submit'>Seacrch</button>
//             </div>
//             <ul className='navbar-menu'>
//                 <li onClick={() => { setMenu('careers') }} className={menu == 'careers' ? 'active' : ''}>Careers</li>
//                 <li onClick={() => { setMenu('about') }} className={menu == 'about' ? 'active' : ''}>About</li>
//                 <li onClick={() => { setMenu('contact-us') }} className={menu == 'contact-us' ? 'active' : ''}>Contact Us</li>
//             </ul>
//             <div className="navbar-right">
//                 <button>Sign In</button>
//             </div>
//         </div>
//     )
// }

// export default Navbar

import React, { useState } from 'react';
import './Navbar.css';
import logo from 'D:/Projects/IndustrialProject/frontend/src/assets/Images/logo.png'


const NavBar = () => {
  const [product, setProduct] = useState('');
  const [firmDetails, setFirmDetails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [btn, setBtn] = useState(false)
  const [isPopup, setIspopup] = useState(false)

  axios.defaults.withCredentials = true
  const fetchFirmDetails = async (e) => {
    e.preventDefault()
    if (product !== ' ')
      try {
        const response = await fetch(`http://localhost:7001/datas/getFirmDetails?product=${product}`);
        const data = await response.json();
        if (response.ok) {
          setFirmDetails(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error fetching firm details:', error);
      }
      setBtn(!btn)
      setIspopup(!isPopup) 
      if(btn==true)
        window.location.reload()     
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e)=>{
      setProduct(e.target.value)
  }

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="my-logo" width={'150px'} />
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <form className="nav-search">
            <input
              type="text"
              value={product}
              onChange={handleChange}
              placeholder="Search..."
              className='searchBox'
            />
            <button type='submit' onClick={fetchFirmDetails}>{btn?'Close':'Search'}</button>
          </form>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <div className="hamburger">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
      <div className='output-div'>
        { isPopup && firmDetails.sort().length > 0 ? (
          <div className='inner-output-div'>
            <h2 className='bg-success p-2 productHeading'>{product}</h2>
            {firmDetails.map((firm, index) => (
              <ul key={index} className='list-group list-group'>
                <li className='list-group-item litst-items d-flex justify-content-between align-items-start'>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{firm.firmname}</div>
                    {firm.doorno}, {firm.street}, {firm.area}, {firm.city}, {firm.pincode}
                  </div>
                  <span className="text-bg-primary rounded-pill p-2">{firm.mobile}</span>
                </li>
              </ul>))
            }
          </div>) : <p></p>
        }
      </div>
    </div>
  );
};
export default NavBar;

